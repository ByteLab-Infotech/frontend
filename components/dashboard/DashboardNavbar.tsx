'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';

interface DashboardNavbarProps {
  onMenuToggle: () => void;
  title?: string;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ 
  onMenuToggle, 
  title = 'Dashboard' 
}) => {
  const { user, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 md:hidden">
        <div className="h-16" />
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm z-40 md:hidden"
      role="navigation"
      aria-label="Dashboard navigation"
    >
      <div className="flex items-center justify-between h-full px-4">
        {/* Left: Menu button and title */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuToggle}
            className="p-2 rounded-lg hover:bg-gray-100 text-navy transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={false}
            aria-controls="dashboard-sidebar"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
          
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <h1 className="text-lg font-heading font-bold text-navy truncate">
              {title}
            </h1>
          </div>
        </div>

        {/* Right: User info and logout */}
        <div className="flex items-center gap-2">
          {user && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-grey text-sm text-charcoal min-w-0">
              <User className="w-4 h-4 flex-shrink-0" />
              <span className="truncate max-w-[120px]">{user.email || user.name}</span>
            </div>
          )}
          
          <Button
            variant="outline"
            onClick={logout}
            className="min-h-[44px] px-3 sm:px-4"
            aria-label="Logout"
          >
            <LogOut className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

