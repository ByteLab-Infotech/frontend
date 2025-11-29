'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarItem {
  label: string;
  key: string;
  icon?: React.ReactNode;
  href?: string;
}

interface SidebarProps {
  items: SidebarItem[];
  activeKey?: string;
  onItemClick?: (key: string) => void;
  collapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  items, 
  activeKey, 
  onItemClick,
  collapsed: controlledCollapsed,
  onCollapseChange
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const collapsed = controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;
  const setCollapsed = onCollapseChange || setInternalCollapsed;

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (item: SidebarItem) => {
    if (item.href) {
      window.location.href = item.href;
    } else {
      onItemClick?.(item.key);
    }
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`
        bg-navy min-h-screen p-6 transition-all duration-300
        ${collapsed ? 'w-20' : 'w-64'}
        ${isMobile ? 'fixed left-0 top-0 z-50 shadow-2xl' : ''}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <AnimatePresence mode="wait">
          {!collapsed && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-white text-xl font-heading font-bold whitespace-nowrap">
                ByteLab Infotech
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Desktop collapse button */}
        {!isMobile && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-[#1a3a5e] text-white transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </motion.button>
        )}
        
        {/* Mobile close button */}
        {isMobile && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg hover:bg-[#1a3a5e] text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </motion.button>
        )}
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {items.map((item, index) => {
          const isActive = activeKey === item.key;
          return (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleItemClick(item)}
              className={`
                w-full text-left flex items-center rounded-lg transition-all duration-200 min-h-[44px]
                ${collapsed ? 'justify-center px-3' : 'px-4'}
                ${isActive
                  ? 'bg-electric-blue text-white shadow-glow'
                  : 'text-sky-blue hover:bg-[#1a3a5e] hover:text-white'
                }
              `}
              title={collapsed ? item.label : undefined}
            >
              {item.icon && (
                <span className={collapsed ? '' : 'mr-3'}>
                  {item.icon}
                </span>
              )}
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </nav>
    </motion.div>
  );

  // Prevent hydration mismatch by only showing mobile UI after mount
  if (!mounted) {
    return (
      <div className="hidden md:block">
        {sidebarContent}
      </div>
    );
  }

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileOpen(true)}
          className="fixed top-4 left-4 z-40 p-3 bg-navy text-white rounded-lg shadow-lg md:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      )}

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      {!isMobile && sidebarContent}
    </>
  );
};

