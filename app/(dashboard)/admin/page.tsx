'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Pagination } from '@/components/ui/Pagination';
import api from '@/lib/api';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [activeTab, setActiveTab] = useState('students');
  const [students, setStudents] = useState<any[]>([]);
  const [tasks, setTasks] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [domains, setDomains] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  
  // Loading states
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  
  // Error state
  const [error, setError] = useState<string>('');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState<Record<string, number>>({
    students: 1,
    tasks: 1,
    payments: 1,
    batches: 1,
    domains: 1,
    submissions: 1,
  });
  const itemsPerPage = 20;
  
  // Form states
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showBatchForm, setShowBatchForm] = useState(false);
  const [showDomainForm, setShowDomainForm] = useState(false);
  const [editingDomain, setEditingDomain] = useState<any>(null);
  const [editingTask, setEditingTask] = useState<any>(null);
  const [editingBatch, setEditingBatch] = useState<any>(null);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);
  const [studentTasks, setStudentTasks] = useState<any[]>([]);
  const [loadingStudentTasks, setLoadingStudentTasks] = useState(false);
  const [startingBatchFor, setStartingBatchFor] = useState<number | null>(null);
  const [showStartBatchConfirm, setShowStartBatchConfirm] = useState<number | null>(null);
  
  // Task form
  const [taskForm, setTaskForm] = useState({ 
    domain: '', 
    title: '', 
    level: '', 
    description: '', 
    requirements: [] as string[], 
    expectedOutput: '' 
  });
  
  // Batch form
  const [batchForm, setBatchForm] = useState({ domain: '', duration: 30, startDate: '' });
  
  // Domain form
  const [domainForm, setDomainForm] = useState({ name: '', durations: [30, 45, 90], certificatePrice: '' });
  
  // Filters
  const [studentFilter, setStudentFilter] = useState('');
  const [taskFilter, setTaskFilter] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      const initialize = useAuthStore.getState().initialize;
      await initialize();
      const currentUser = useAuthStore.getState().user;
      if (!currentUser || currentUser.role !== 'ADMIN') {
        router.push('/login');
        return;
      }
      // Load domains on mount
      api.get('/domains').then((res) => setDomains(res.data)).catch(console.error);
      loadData();
    };
    checkAuth();
  }, [router, activeTab]);

  const loadData = useCallback(async () => {
    if (loading[activeTab]) return;
    
    setLoading(prev => ({ ...prev, [activeTab]: true }));
    try {
      if (activeTab === 'students') {
        const res = await api.get('/admin/students');
        setStudents(res.data);
      } else if (activeTab === 'tasks') {
        const res = await api.get('/admin/tasks');
        setTasks(res.data);
      } else if (activeTab === 'payments') {
        const res = await api.get('/admin/payments');
        setPayments(res.data);
      } else if (activeTab === 'batches') {
        const res = await api.get('/admin/batch/list');
        setBatches(res.data);
      } else if (activeTab === 'domains') {
        const res = await api.get('/domains');
        setDomains(res.data);
      } else if (activeTab === 'submissions') {
        const res = await api.get('/admin/submissions');
        setSubmissions(res.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(prev => ({ ...prev, [activeTab]: false }));
    }
  }, [activeTab, loading]);

  const handleCreateTask = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await api.put(`/admin/task/update/${editingTask.id}`, taskForm);
      } else {
        await api.post('/admin/task/create', taskForm);
      }
      setShowTaskForm(false);
      setEditingTask(null);
      setTaskForm({ 
        domain: '', 
        title: '', 
        level: '', 
        description: '', 
        requirements: [], 
        expectedOutput: '' 
      });
      setError('');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save task');
    }
  }, [taskForm, editingTask, loadData]);

  const handleEditTask = useCallback((task: any) => {
    setEditingTask(task);
    setTaskForm({
      domain: task.domain,
      title: task.title,
      level: task.level || '',
      description: task.description || '',
      requirements: task.requirements || [],
      expectedOutput: task.expectedOutput || ''
    });
    setShowTaskForm(true);
  }, []);

  const handleDeleteTask = useCallback(async (taskId: number) => {
    if (!confirm('Are you sure you want to delete this task? This action cannot be undone.')) {
      return;
    }
    try {
      await api.delete(`/admin/task/${taskId}`);
      setError('');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to delete task');
    }
  }, [loadData]);

  const handleCreateBatch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBatch) {
        await api.put(`/admin/batch/${editingBatch.id}`, batchForm);
      } else {
        await api.post('/admin/batch/create', batchForm);
      }
      setShowBatchForm(false);
      setEditingBatch(null);
      setBatchForm({ domain: '', duration: 30, startDate: '' });
      setError('');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save batch');
    }
  }, [batchForm, editingBatch, loadData]);

  const handleEditBatch = useCallback((batch: any) => {
    setEditingBatch(batch);
    setBatchForm({
      domain: batch.domain,
      duration: batch.duration,
      startDate: new Date(batch.startDate).toISOString().split('T')[0]
    });
    setShowBatchForm(true);
  }, []);

  const handleDeleteBatch = useCallback(async (batchId: number) => {
    if (!confirm('Are you sure you want to delete this batch? This action cannot be undone.')) {
      return;
    }
    try {
      await api.delete(`/admin/batch/${batchId}`);
      setError('');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Failed to delete batch');
    }
  }, [loadData]);

  const handleCreateDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const durations = domainForm.durations.filter(d => d > 0);
      const data = {
        ...domainForm,
        durations,
        certificatePrice: parseFloat(domainForm.certificatePrice) || 0
      };
      
      if (editingDomain) {
        await api.put(`/admin/domain/${editingDomain.id}`, data);
        setEditingDomain(null);
      } else {
        await api.post('/admin/domain/create', data);
      }
      setShowDomainForm(false);
      setDomainForm({ name: '', durations: [30, 45, 90], certificatePrice: '' });
      setError('');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save domain');
    }
  };

  const handleEditDomain = (domain: any) => {
    setEditingDomain(domain);
    setDomainForm({
      name: domain.name,
      durations: domain.durations || [30, 45, 90],
      certificatePrice: domain.certificatePrice?.toString() || ''
    });
    setShowDomainForm(true);
  };

  const handleOverrideSubmission = async (submissionId: number, validated: boolean) => {
    try {
      await api.post('/admin/submission/override', { submissionId, validated });
      setError(''); // Clear error on success
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update submission');
    }
  };

  const handleViewStudentTasks = useCallback(async (studentId: number) => {
    setSelectedStudentId(studentId);
    setLoadingStudentTasks(true);
    try {
      const res = await api.get(`/admin/student-tasks/${studentId}`);
      setStudentTasks(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load student tasks');
      setStudentTasks([]);
    } finally {
      setLoadingStudentTasks(false);
    }
  }, []);

  const handleOverrideTask = useCallback(async (studentTaskId: number, approved: boolean) => {
    try {
      await api.post('/admin/student-tasks/override', { studentTaskId, approved });
      setError(''); // Clear error on success
      if (selectedStudentId) {
        handleViewStudentTasks(selectedStudentId);
      }
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to update task');
    }
  }, [selectedStudentId, handleViewStudentTasks, loadData]);

  const handleStartBatch = useCallback(async (studentId: number) => {
    setStartingBatchFor(studentId);
    setError('');
    try {
      const res = await api.post(`/admin/student/${studentId}/start-batch`);
      setError(''); // Clear any previous errors
      // Show success message
      alert(res.data.message || 'Batch started successfully!');
      // Refresh student list
      loadData();
      // If viewing this student's tasks, refresh them too
      if (selectedStudentId === studentId) {
        handleViewStudentTasks(studentId);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Failed to start batch');
    } finally {
      setStartingBatchFor(null);
    }
  }, [selectedStudentId, handleViewStudentTasks, loadData]);

  const handleApprovePayment = useCallback(async (paymentId: number) => {
    if (!confirm('Are you sure you want to approve this payment? Certificate will be generated automatically.')) {
      return;
    }
    setError('');
    try {
      const res = await api.post(`/admin/payment/${paymentId}/approve`);
      setError(''); // Clear any previous errors
      alert(res.data.message || 'Payment approved successfully!');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Failed to approve payment');
    }
  }, [loadData]);

  const handleRejectPayment = useCallback(async (paymentId: number, reason: string) => {
    if (!reason || !reason.trim()) {
      setError('Rejection reason is required');
      return;
    }
    setError('');
    try {
      const res = await api.post(`/admin/payment/${paymentId}/reject`, { reason: reason.trim() });
      setError(''); // Clear any previous errors
      alert(res.data.message || 'Payment rejected successfully!');
      loadData();
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Failed to reject payment');
    }
  }, [loadData]);

  const sidebarItems = [
    { label: 'Students', key: 'students' },
    { label: 'Tasks', key: 'tasks' },
    { label: 'Payments', key: 'payments' },
    { label: 'Batches', key: 'batches' },
    { label: 'Domains', key: 'domains' },
    { label: 'Submissions', key: 'submissions' },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter(s => 
      !studentFilter || 
      s.name.toLowerCase().includes(studentFilter.toLowerCase()) ||
      s.email.toLowerCase().includes(studentFilter.toLowerCase()) ||
      (s.domain && s.domain.toLowerCase().includes(studentFilter.toLowerCase()))
    );
  }, [students, studentFilter]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(t =>
      !taskFilter ||
      t.title.toLowerCase().includes(taskFilter.toLowerCase()) ||
      t.domain.toLowerCase().includes(taskFilter.toLowerCase())
    );
  }, [tasks, taskFilter]);

  // Pagination calculations
  const paginatedStudents = useMemo(() => {
    const start = (currentPage.students - 1) * itemsPerPage;
    return filteredStudents.slice(start, start + itemsPerPage);
  }, [filteredStudents, currentPage.students]);

  const paginatedTasks = useMemo(() => {
    const start = (currentPage.tasks - 1) * itemsPerPage;
    return filteredTasks.slice(start, start + itemsPerPage);
  }, [filteredTasks, currentPage.tasks]);

  const paginatedPayments = useMemo(() => {
    const start = (currentPage.payments - 1) * itemsPerPage;
    return payments.slice(start, start + itemsPerPage);
  }, [payments, currentPage.payments]);

  const paginatedBatches = useMemo(() => {
    const start = (currentPage.batches - 1) * itemsPerPage;
    return batches.slice(start, start + itemsPerPage);
  }, [batches, currentPage.batches]);

  const paginatedSubmissions = useMemo(() => {
    const start = (currentPage.submissions - 1) * itemsPerPage;
    return submissions.slice(start, start + itemsPerPage);
  }, [submissions, currentPage.submissions]);

  const totalPages = useMemo(() => ({
    students: Math.ceil(filteredStudents.length / itemsPerPage),
    tasks: Math.ceil(filteredTasks.length / itemsPerPage),
    payments: Math.ceil(payments.length / itemsPerPage),
    batches: Math.ceil(batches.length / itemsPerPage),
    domains: Math.ceil(domains.length / itemsPerPage),
    submissions: Math.ceil(submissions.length / itemsPerPage),
  }), [filteredStudents.length, filteredTasks.length, payments.length, batches.length, domains.length, submissions.length]);

  const handlePageChange = useCallback((tab: string, page: number) => {
    setCurrentPage(prev => ({ ...prev, [tab]: page }));
  }, []);

  return (
    <div className="flex min-h-screen bg-[#EDEDED]">
      <Sidebar 
        items={sidebarItems} 
        activeKey={activeTab}
        onItemClick={(key) => setActiveTab(key)}
      />
      <div className="flex-1 p-4 md:p-8 w-full md:w-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0A284E]">Admin Dashboard</h1>
            <Button variant="outline" onClick={logout} className="w-full sm:w-auto">Logout</Button>
          </div>

          {error && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong>Error:</strong> {error}
              <button
                onClick={() => setError('')}
                className="float-right text-red-700 hover:text-red-900 font-bold"
              >
                ×
              </button>
            </div>
          )}

          {/* Start Batch Confirmation Dialog */}
          {showStartBatchConfirm && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
                <h3 className="text-xl font-semibold text-navy mb-4">Start Batch for Student</h3>
                <p className="text-body text-gray-700 mb-6">
                  Are you sure you want to start the batch for this student? This will:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-6 space-y-2 ml-2">
                  <li>Override the batch start date to today</li>
                  <li>Immediately assign tasks to the student</li>
                  <li>Send a task assignment email notification</li>
                  <li>Update the batch status to RUNNING</li>
                </ul>
                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowStartBatchConfirm(null)}
                    disabled={startingBatchFor !== null}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleStartBatch(showStartBatchConfirm)}
                    disabled={startingBatchFor !== null}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    {startingBatchFor === showStartBatchConfirm ? 'Starting...' : 'Yes, Start Batch'}
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {['students', 'tasks', 'payments', 'batches', 'domains', 'submissions'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? 'primary' : 'outline'}
                onClick={() => setActiveTab(tab)}
                className="text-sm px-3 py-2 flex-1 sm:flex-initial min-w-[100px]"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>

          {activeTab === 'students' && (
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Students</h2>
                <Input
                  placeholder="Search students..."
                  value={studentFilter}
                  onChange={(e) => setStudentFilter(e.target.value)}
                  className="w-64"
                />
              </div>
              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="border-b bg-[#EDEDED]">
                      <th className="text-left p-3 font-semibold">Name</th>
                      <th className="text-left p-3 font-semibold">Email</th>
                      <th className="text-left p-3 font-semibold">Phone</th>
                      <th className="text-left p-3 font-semibold">College</th>
                      <th className="text-left p-3 font-semibold">Domain</th>
                      <th className="text-left p-3 font-semibold">Duration</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading.students ? (
                      <tr>
                        <td colSpan={9} className="p-4 text-center text-gray-500">Loading...</td>
                      </tr>
                    ) : paginatedStudents.length === 0 ? (
                      <tr>
                        <td colSpan={9} className="p-4 text-center text-gray-500">No students found</td>
                      </tr>
                    ) : (
                      paginatedStudents.map((student) => (
                        <tr key={student.id} className="border-b hover:bg-[#EDEDED]">
                          <td className="p-3">{student.name}</td>
                          <td className="p-3">{student.email}</td>
                          <td className="p-3">{student.phone || '-'}</td>
                          <td className="p-3">{student.college || '-'}</td>
                          <td className="p-3">{student.domain || '-'}</td>
                          <td className="p-3">{student.duration ? `${student.duration} days` : '-'}</td>
                          <td className="p-3">
                            {student.status && (
                              <Badge status={student.status.toLowerCase() as any} />
                            )}
                          </td>
                          <td className="p-3">
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button
                                variant="outline"
                                onClick={() => handleViewStudentTasks(student.id)}
                                className="text-xs px-3 py-1 flex-1 sm:flex-initial"
                                disabled={!student.domain}
                              >
                                View Tasks
                              </Button>
                              {student.domain && student.status && student.status.toLowerCase() === 'pending' && (
                                <Button
                                  variant="primary"
                                  onClick={() => setShowStartBatchConfirm(student.id)}
                                  disabled={startingBatchFor === student.id || startingBatchFor !== null}
                                  className="text-xs px-3 py-1 flex-1 sm:flex-initial bg-green-600 hover:bg-green-700 disabled:opacity-50"
                                  title="Start batch and assign tasks immediately"
                                >
                                  {startingBatchFor === student.id ? 'Starting...' : 'Start Batch'}
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {activeTab === 'tasks' && (
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Tasks</h2>
                <div className="flex gap-2">
                  <Input
                    placeholder="Search tasks..."
                    value={taskFilter}
                    onChange={(e) => setTaskFilter(e.target.value)}
                    className="w-64"
                  />
                  <Button onClick={() => setShowTaskForm(true)}>Create Task</Button>
                </div>
              </div>

              {showTaskForm && (
                <Card className="mb-4 bg-[#EDEDED]">
                  <h3 className="font-semibold mb-4">{editingTask ? 'Edit Task' : 'Create New Task'}</h3>
                  <form onSubmit={handleCreateTask} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Domain</label>
                      <select
                        value={taskForm.domain}
                        onChange={(e) => setTaskForm({ ...taskForm, domain: e.target.value })}
                        className="w-full border border-[#D0D0D0] rounded-md p-3 focus:ring-2 focus:ring-[#2D92F3] focus:border-[#2D92F3] outline-none"
                        required
                      >
                        <option value="">Select a domain</option>
                        {domains.map((domain) => (
                          <option key={domain.id} value={domain.name}>
                            {domain.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Input
                      label="Title"
                      value={taskForm.title}
                      onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium mb-2">Level</label>
                      <select
                        value={taskForm.level}
                        onChange={(e) => setTaskForm({ ...taskForm, level: e.target.value })}
                        className="w-full border border-[#D0D0D0] rounded-md p-3"
                        required
                      >
                        <option value="">Select a level</option>
                        <option value="BEGINNER">Beginner</option>
                        <option value="INTERMEDIATE">Intermediate</option>
                        <option value="ADVANCED">Advanced</option>
                        <option value="FINAL">Final</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Description</label>
                      <textarea
                        value={taskForm.description}
                        onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                        className="w-full border border-[#D0D0D0] rounded-md p-3"
                        rows={4}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Requirements (one per line)</label>
                      <textarea
                        value={taskForm.requirements || ''}
                        onChange={(e) => setTaskForm({ 
                          ...taskForm, 
                          requirements: e.target.value.split('\n').filter(r => r.trim()) 
                        })}
                        className="w-full border border-[#D0D0D0] rounded-md p-3"
                        rows={4}
                        placeholder="Requirement 1&#10;Requirement 2&#10;Requirement 3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Expected Output</label>
                      <textarea
                        value={taskForm.expectedOutput || ''}
                        onChange={(e) => setTaskForm({ ...taskForm, expectedOutput: e.target.value })}
                        className="w-full border border-[#D0D0D0] rounded-md p-3"
                        rows={3}
                        required
                        placeholder="Describe what the student should deliver..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit">{editingTask ? 'Update' : 'Create'}</Button>
                      <Button type="button" variant="outline" onClick={() => {
                        setShowTaskForm(false);
                        setEditingTask(null);
                        setTaskForm({ 
                          domain: '', 
                          title: '', 
                          level: '', 
                          description: '', 
                          requirements: [], 
                          expectedOutput: '' 
                        });
                      }}>Cancel</Button>
                    </div>
                  </form>
                </Card>
              )}

              <div className="space-y-4">
                {filteredTasks.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No tasks found</p>
                ) : (
                  filteredTasks.map((task) => (
                    <div key={task.id} className="border border-[#E0E0E0] rounded p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-lg">{task.title}</h3>
                            {task.level && (
                              <Badge level={task.level as 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'FINAL'} />
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{task.domain} - {task.level}</p>
                          {task.description && (
                            <p className="text-gray-700 mt-2">{task.description}</p>
                          )}
                          {task.requirements && task.requirements.length > 0 && (
                            <div className="mt-2">
                              <p className="text-sm font-semibold">Requirements:</p>
                              <ul className="list-disc list-inside text-sm text-gray-600">
                                {task.requirements.map((req: string, idx: number) => (
                                  <li key={idx}>{req}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {task.expectedOutput && (
                            <div className="mt-2">
                              <p className="text-sm font-semibold">Expected Output:</p>
                              <p className="text-sm text-gray-600">{task.expectedOutput}</p>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button variant="outline" onClick={() => handleEditTask(task)} className="text-xs px-3 py-1 flex-1 sm:flex-initial">
                            Edit
                          </Button>
                          <Button variant="outline" onClick={() => handleDeleteTask(task.id)} className="text-xs px-3 py-1 text-red-600 hover:text-red-700 flex-1 sm:flex-initial">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          )}

          {activeTab === 'payments' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Payments</h2>
              {error && (
                <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  {error}
                  <button onClick={() => setError('')} className="float-right font-bold">×</button>
                </div>
              )}
              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="border-b bg-[#EDEDED]">
                      <th className="text-left p-3 font-semibold">Student</th>
                      <th className="text-left p-3 font-semibold">Email</th>
                      <th className="text-left p-3 font-semibold">Amount</th>
                      <th className="text-left p-3 font-semibold">Transaction Reference</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Date</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading.payments ? (
                      <tr>
                        <td colSpan={7} className="p-4 text-center text-gray-500">Loading...</td>
                      </tr>
                    ) : paginatedPayments.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-4 text-center text-gray-500">No payments found</td>
                      </tr>
                    ) : (
                      paginatedPayments.map((payment) => (
                        <tr key={payment.id} className="border-b hover:bg-[#EDEDED]">
                          <td className="p-3">{payment.userName || '-'}</td>
                          <td className="p-3 text-sm text-gray-600">{payment.userEmail || '-'}</td>
                          <td className="p-3 font-semibold">₹{payment.amount}</td>
                          <td className="p-3 font-mono text-sm">
                            {payment.transactionReference || (
                              <span className="text-gray-400 italic">Not submitted</span>
                            )}
                          </td>
                          <td className="p-3">
                            <Badge 
                              status={
                                payment.status === 'SUCCESS' ? 'approved' : 
                                payment.status === 'FAILED' ? 'rejected' : 
                                'pending'
                              } 
                            />
                            {payment.rejectedReason && (
                              <p className="text-xs text-red-600 mt-1">{payment.rejectedReason}</p>
                            )}
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            {new Date(payment.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-3">
                            {payment.status === 'PENDING' && payment.transactionReference ? (
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() => handleApprovePayment(payment.id)}
                                  className="bg-green-50 text-green-700 border-green-300 hover:bg-green-100 text-sm px-3 py-1"
                                >
                                  Approve
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => {
                                    const reason = prompt('Enter rejection reason:');
                                    if (reason) {
                                      handleRejectPayment(payment.id, reason);
                                    }
                                  }}
                                  className="bg-red-50 text-red-700 border-red-300 hover:bg-red-100 text-sm px-3 py-1"
                                >
                                  Reject
                                </Button>
                              </div>
                            ) : (
                              <span className="text-gray-400 text-sm">-</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {totalPages.payments > 0 && (
                <Pagination
                  currentPage={currentPage.payments}
                  totalPages={totalPages.payments}
                  onPageChange={(page) => handlePageChange('payments', page)}
                />
              )}
            </Card>
          )}

          {activeTab === 'batches' && (
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Batches</h2>
                <Button onClick={() => setShowBatchForm(true)}>Create Batch</Button>
              </div>

              {showBatchForm && (
                <Card className="mb-4 bg-[#EDEDED]">
                  <h3 className="font-semibold mb-4">{editingBatch ? 'Edit Batch' : 'Create New Batch'}</h3>
                  <form onSubmit={handleCreateBatch} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Domain</label>
                      <select
                        value={batchForm.domain}
                        onChange={(e) => {
                          const selectedDomain = domains.find(d => d.name === e.target.value);
                          setBatchForm({ 
                            ...batchForm, 
                            domain: e.target.value,
                            duration: selectedDomain?.durations?.[0] || 30
                          });
                        }}
                        className="w-full border border-[#D0D0D0] rounded-md p-3 focus:ring-2 focus:ring-[#2D92F3] focus:border-[#2D92F3] outline-none"
                        required
                      >
                        <option value="">Select a domain</option>
                        {domains.map((domain) => (
                          <option key={domain.id} value={domain.name}>
                            {domain.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Duration (days)</label>
                      <select
                        value={batchForm.duration}
                        onChange={(e) => setBatchForm({ ...batchForm, duration: parseInt(e.target.value) })}
                        className="w-full border border-[#D0D0D0] rounded-md p-3"
                        required
                        disabled={!batchForm.domain}
                      >
                        {batchForm.domain ? (
                          domains.find(d => d.name === batchForm.domain)?.durations?.map((duration: number) => (
                            <option key={duration} value={duration}>
                              {duration} days
                            </option>
                          ))
                        ) : (
                          <>
                            <option value={30}>30 days</option>
                            <option value={45}>45 days</option>
                            <option value={90}>90 days</option>
                          </>
                        )}
                      </select>
                      {batchForm.domain && !domains.find(d => d.name === batchForm.domain)?.durations?.includes(batchForm.duration) && (
                        <p className="text-sm text-red-500 mt-1">Selected duration not available for this domain</p>
                      )}
                    </div>
                    <Input
                      label="Start Date"
                      type="date"
                      value={batchForm.startDate}
                      onChange={(e) => setBatchForm({ ...batchForm, startDate: e.target.value })}
                      required
                    />
                    <div className="flex gap-2">
                      <Button type="submit">{editingBatch ? 'Update' : 'Create'}</Button>
                      <Button type="button" variant="outline" onClick={() => {
                        setShowBatchForm(false);
                        setEditingBatch(null);
                        setBatchForm({ domain: '', duration: 30, startDate: '' });
                      }}>Cancel</Button>
                    </div>
                  </form>
                </Card>
              )}

              <div className="space-y-4">
                {paginatedBatches.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No batches found</p>
                ) : (
                  paginatedBatches.map((batch) => (
                    <div key={batch.id} className="border border-[#E0E0E0] rounded p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{batch.domain} - {batch.duration} days</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {new Date(batch.startDate).toLocaleDateString()} to {new Date(batch.endDate).toLocaleDateString()}
                          </p>
                          <p className="text-sm mt-2">
                            <Badge status={batch.status.toLowerCase() as any} />
                          </p>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button variant="outline" onClick={() => handleEditBatch(batch)} className="text-xs px-3 py-1">
                            Edit
                          </Button>
                          <Button variant="outline" onClick={() => handleDeleteBatch(batch.id)} className="text-xs px-3 py-1 text-red-600 hover:text-red-700">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              {totalPages.batches > 0 && (
                <Pagination
                  currentPage={currentPage.batches}
                  totalPages={totalPages.batches}
                  onPageChange={(page) => handlePageChange('batches', page)}
                />
              )}
            </Card>
          )}

          {activeTab === 'domains' && (
            <Card>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Domains</h2>
                <Button onClick={() => {
                  setEditingDomain(null);
                  setDomainForm({ name: '', durations: [30, 45, 90], certificatePrice: '' });
                  setShowDomainForm(true);
                }}>Create Domain</Button>
              </div>

              {showDomainForm && (
                <Card className="mb-4 bg-[#EDEDED]">
                  <h3 className="font-semibold mb-4">{editingDomain ? 'Edit Domain' : 'Create New Domain'}</h3>
                  <form onSubmit={handleCreateDomain} className="space-y-4">
                    <Input
                      label="Domain Name"
                      value={domainForm.name}
                      onChange={(e) => setDomainForm({ ...domainForm, name: e.target.value })}
                      placeholder="e.g., Web Development"
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium mb-2">Available Durations (days)</label>
                      <div className="flex gap-4">
                        {[30, 45, 90].map((duration) => (
                          <label key={duration} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={domainForm.durations.includes(duration)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setDomainForm({
                                    ...domainForm,
                                    durations: [...domainForm.durations, duration]
                                  });
                                } else {
                                  setDomainForm({
                                    ...domainForm,
                                    durations: domainForm.durations.filter(d => d !== duration)
                                  });
                                }
                              }}
                              className="mr-2"
                            />
                            {duration} days
                          </label>
                        ))}
                      </div>
                    </div>
                    <Input
                      label="Certificate Price (₹)"
                      type="number"
                      value={domainForm.certificatePrice}
                      onChange={(e) => setDomainForm({ ...domainForm, certificatePrice: e.target.value })}
                      placeholder="499"
                      required
                    />
                    <div className="flex gap-2">
                      <Button type="submit">{editingDomain ? 'Update' : 'Create'}</Button>
                      <Button type="button" variant="outline" onClick={() => {
                        setShowDomainForm(false);
                        setEditingDomain(null);
                      }}>Cancel</Button>
                    </div>
                  </form>
                </Card>
              )}

              <div className="space-y-4">
                {domains.length === 0 ? (
                  <p className="text-center text-gray-500 py-8">No domains found</p>
                ) : (
                  domains.map((domain) => (
                    <div key={domain.id} className="border border-[#E0E0E0] rounded p-4 hover:shadow-md transition-all duration-200 active:scale-[0.98]">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg break-words">{domain.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            Durations: {domain.durations?.join(', ') || 'None'} days
                          </p>
                          <p className="text-sm text-gray-600">
                            Certificate Price: ₹{domain.certificatePrice || '0'}
                          </p>
                        </div>
                        <Button variant="outline" onClick={() => handleEditDomain(domain)} className="w-full sm:w-auto">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          )}

          {activeTab === 'submissions' && (
            <Card>
              <h2 className="text-xl font-semibold mb-4">Student Task Submissions</h2>
              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="border-b bg-[#EDEDED]">
                      <th className="text-left p-3 font-semibold">Task</th>
                      <th className="text-left p-3 font-semibold">Student</th>
                      <th className="text-left p-3 font-semibold">Level</th>
                      <th className="text-left p-3 font-semibold">GitHub URL</th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Submitted At</th>
                      <th className="text-left p-3 font-semibold">Validation Result</th>
                      <th className="text-left p-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading.submissions ? (
                      <tr>
                        <td colSpan={8} className="p-4 text-center text-gray-500">Loading...</td>
                      </tr>
                    ) : paginatedSubmissions.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="p-4 text-center text-gray-500">No submissions found</td>
                      </tr>
                    ) : (
                      paginatedSubmissions.map((studentTask: any) => (
                        <tr key={studentTask.id} className="border-b hover:bg-[#EDEDED]">
                          <td className="p-3">
                            <div className="font-semibold">{studentTask.task?.title || 'N/A'}</div>
                            <div className="text-xs text-gray-500">{studentTask.task?.domain || ''}</div>
                          </td>
                          <td className="p-3 text-sm">
                            <div className="font-semibold">{studentTask.studentName || 'N/A'}</div>
                            <div className="text-xs text-gray-500">{studentTask.studentEmail || ''}</div>
                          </td>
                          <td className="p-3">
                            {studentTask.task?.level && (
                              <Badge level={studentTask.task.level as 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'FINAL'} />
                            )}
                            {!studentTask.task?.level && (
                              <span className="text-xs text-gray-600">{studentTask.task?.level || 'N/A'}</span>
                            )}
                          </td>
                          <td className="p-3">
                            {studentTask.githubUrl ? (
                              <a 
                                href={studentTask.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#2D92F3] hover:underline text-sm"
                              >
                                {studentTask.githubUrl.length > 40 ? studentTask.githubUrl.substring(0, 40) + '...' : studentTask.githubUrl}
                              </a>
                            ) : (
                              <span className="text-gray-400 text-sm">Not submitted</span>
                            )}
                          </td>
                          <td className="p-3">
                            <Badge status={
                              studentTask.status === 'APPROVED' ? 'approved' :
                              studentTask.status === 'REJECTED' ? 'rejected' :
                              'pending'
                            } />
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            {studentTask.submittedAt ? new Date(studentTask.submittedAt).toLocaleString() : '-'}
                          </td>
                          <td className="p-3 text-sm text-gray-600 max-w-xs">
                            {studentTask.validationResult ? (
                              <div className={`p-2 rounded text-xs ${
                                studentTask.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                                studentTask.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {studentTask.validationResult.length > 100 
                                  ? studentTask.validationResult.substring(0, 100) + '...' 
                                  : studentTask.validationResult}
                              </div>
                            ) : '-'}
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              {studentTask.status !== 'APPROVED' && (
                                <Button
                                  variant="outline"
                                  onClick={() => handleOverrideTask(studentTask.id, true)}
                                  className="text-xs px-2 py-1 text-green-600"
                                >
                                  Approve
                                </Button>
                              )}
                              {studentTask.status !== 'REJECTED' && (
                                <Button
                                  variant="outline"
                                  onClick={() => handleOverrideTask(studentTask.id, false)}
                                  className="text-xs px-2 py-1 text-red-600"
                                >
                                  Reject
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {totalPages.submissions > 0 && (
                <Pagination
                  currentPage={currentPage.submissions}
                  totalPages={totalPages.submissions}
                  onPageChange={(page) => handlePageChange('submissions', page)}
                />
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
