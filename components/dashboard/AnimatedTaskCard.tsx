'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ChevronUp, CheckCircle2, XCircle, Clock } from 'lucide-react';

interface Task {
  id: number;
  task: {
    id: number;
    title: string;
    level: string;
    description: string;
    requirements?: string[];
    expectedOutput?: string;
  };
  status: string;
  githubUrl?: string;
  validationResult?: string;
}

interface AnimatedTaskCardProps {
  task: Task;
  taskNumber: number;
}

export const AnimatedTaskCard: React.FC<AnimatedTaskCardProps> = React.memo(({ task, taskNumber }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const getStatusIcon = () => {
    switch (task.status) {
      case 'APPROVED':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'REJECTED':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };
  
  const getStatusBadge = () => {
    switch (task.status) {
      case 'APPROVED':
        return <Badge status="approved" animated />;
      case 'REJECTED':
        return <Badge status="rejected" animated />;
      case 'VALIDATING':
      case 'SUBMITTED':
        return <Badge status="pending" animated />;
      default:
        return <Badge status="pending" animated />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)' }}
      className="bg-white rounded-xl border border-gray-100 shadow-soft overflow-hidden"
    >
      <motion.div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-h3 font-heading font-semibold text-navy">
                Task {taskNumber} — {task.task.title}
              </h3>
              {getStatusBadge()}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <span className="font-medium">LEVEL:</span>
              <span>{task.task.level}</span>
              {getStatusIcon()}
            </div>
            <p className="text-body text-gray-700 line-clamp-2">
              {task.task.description}
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-4 p-2 hover:bg-slate-grey rounded-lg transition-colors"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-navy" />
            ) : (
              <ChevronDown className="w-5 h-5 text-navy" />
            )}
          </motion.button>
        </div>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">
              {task.task.requirements && task.task.requirements.length > 0 && (
                <div>
                  <p className="font-semibold text-sm mb-2 text-navy">Requirements:</p>
                  <ul className="list-disc list-inside text-body text-gray-700 space-y-1">
                    {task.task.requirements.map((req: string, idx: number) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {req}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              
              {task.task.expectedOutput && (
                <div>
                  <p className="font-semibold text-sm mb-2 text-navy">Expected Output:</p>
                  <p className="text-body text-gray-700">{task.task.expectedOutput}</p>
                </div>
              )}
              
              {task.validationResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg text-sm ${
                    task.status === 'APPROVED'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : task.status === 'REJECTED'
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-yellow-50 text-yellow-800 border border-yellow-200'
                  }`}
                >
                  {task.validationResult}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

