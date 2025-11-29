'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface TaskCardProps {
  task: {
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
  };
  taskNumber: number;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, taskNumber }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return <Badge status="approved" />;
      case 'REJECTED':
        return <Badge status="rejected" />;
      case 'VALIDATING':
      case 'SUBMITTED':
        return <Badge status="pending" />;
      default:
        return <Badge status="pending" />;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-lg">
              Task {taskNumber} — {task.task.title}
            </h3>
            {getStatusBadge(task.status)}
          </div>
          <p className="text-sm text-gray-600 mb-2">
            <strong>LEVEL:</strong> {task.task.level}
          </p>
          <p className="text-gray-700 mb-3">{task.task.description}</p>
          
          {task.task.requirements && task.task.requirements.length > 0 && (
            <div className="mb-3">
              <p className="font-semibold text-sm mb-2">Requirements:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {task.task.requirements.map((req: string, idx: number) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          
          {task.task.expectedOutput && (
            <div className="mb-3">
              <p className="font-semibold text-sm mb-1">Expected Output:</p>
              <p className="text-sm text-gray-700">{task.task.expectedOutput}</p>
            </div>
          )}
          
          {task.validationResult && (
            <div className={`mt-2 p-2 rounded text-sm ${
              task.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
              task.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {task.validationResult}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

