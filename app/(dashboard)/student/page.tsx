'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/ui/Sidebar';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { AnimatedProgressBar } from '@/components/ui/AnimatedProgressBar';
import { Input } from '@/components/ui/Input';
import { SkeletonLoader } from '@/components/ui/SkeletonLoader';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { ProgressTimeline } from '@/components/dashboard/ProgressTimeline';
import { AnimatedTaskCard } from '@/components/dashboard/AnimatedTaskCard';
import { GitHubGuideModal } from '@/components/dashboard/GitHubGuideModal';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '@/lib/animations';
import { triggerConfetti } from '@/lib/confetti';
import api from '@/lib/api';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { HelpCircle, BookOpen, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/ui/Tooltip';
import { QRCodeSVG } from 'qrcode.react';

export default function StudentDashboard() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [internship, setInternship] = useState<any>(null);
  const [assignedTasks, setAssignedTasks] = useState<any[]>([]);
  const [taskStatus, setTaskStatus] = useState<any>(null);
  const [submittedGithubUrl, setSubmittedGithubUrl] = useState(''); // URL from backend (actually submitted)
  const [githubUrlInput, setGithubUrlInput] = useState(''); // User input value
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [domainData, setDomainData] = useState<any>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingOfferLetter, setLoadingOfferLetter] = useState(false);
  const [loadingCertificate, setLoadingCertificate] = useState(false);
  const [showGitHubGuide, setShowGitHubGuide] = useState(false);
  const [showGitHubGuideExpanded, setShowGitHubGuideExpanded] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<any>(null);
  const [upiUrl, setUpiUrl] = useState('');
  const [paymentId, setPaymentId] = useState<number | null>(null);
  const [transactionRef, setTransactionRef] = useState('');
  const [submittingTransaction, setSubmittingTransaction] = useState(false);
  const [loadingPayment, setLoadingPayment] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const initialize = useAuthStore.getState().initialize;
      await initialize();
      const currentUser = useAuthStore.getState().user;
      if (!currentUser) {
        router.push('/login');
        return;
      }
      loadData();
    };
    checkAuth();
  }, [router]);

  const loadData = async () => {
    setLoadingData(true);
    try {
      // Use Promise.allSettled to handle partial failures gracefully
      const [internshipResult, tasksResult, statusResult, domainsResult, paymentResult] = await Promise.allSettled([
        api.get('/internship/details'),
        api.get('/tasks/assigned'),
        api.get('/tasks/status'),
        api.get('/domains'),
        api.get('/payment/status'),
      ]);
      
      // Only update internship if the request succeeded
      if (internshipResult.status === 'fulfilled') {
        const internshipData = internshipResult.value.data;
        setInternship(internshipData);
        
        // Find matching domain data
        if (domainsResult.status === 'fulfilled' && internshipData?.domain) {
          const domain = domainsResult.value.data.find((d: any) => d.name === internshipData.domain);
          if (domain) {
            setDomainData(domain);
          }
        }
      } else {
        // Log error but preserve existing state
        console.error('Failed to load internship details:', internshipResult.reason);
        // Don't clear existing internship state on error
      }
      
      // Only update tasks if the request succeeded
      if (tasksResult.status === 'fulfilled') {
        const tasksData = tasksResult.value.data || [];
        setAssignedTasks(tasksData);
        
        // Get GitHub URL from first task if available (this is the submitted URL from backend)
        if (tasksData.length > 0 && tasksData[0].githubUrl) {
          setSubmittedGithubUrl(tasksData[0].githubUrl);
        } else {
          setSubmittedGithubUrl(''); // Clear if no submitted URL
        }
      } else {
        console.error('Failed to load assigned tasks:', tasksResult.reason);
        // Set empty array only if we don't have existing tasks
        if (assignedTasks.length === 0) {
          setAssignedTasks([]);
        }
      }
      
      // Only update task status if the request succeeded
      if (statusResult.status === 'fulfilled') {
        setTaskStatus(statusResult.value.data);
      } else {
        console.error('Failed to load task status:', statusResult.reason);
        // Preserve existing task status on error
      }
      
      // Only update payment status if the request succeeded
      if (paymentResult.status === 'fulfilled') {
        const paymentData = paymentResult.value.data;
        setPaymentStatus(paymentData);
        if (paymentData.status === 'PENDING' && paymentData.paymentId) {
          setPaymentId(paymentData.paymentId);
          // If payment is pending and we have UPI URL from backend, use it (handles page refresh)
          if (paymentData.upiUrl) {
            setUpiUrl(paymentData.upiUrl);
          }
          // Note: Backend should always return upiUrl for PENDING payments in status response
          // If user clicks "Pay & Unlock Certificate" again, it's idempotent and will return existing payment
        } else {
          // Clear UPI URL if payment is not pending
          setUpiUrl('');
        }
      } else {
        console.error('Failed to load payment status:', paymentResult.reason);
      }
    } catch (err) {
      // This catch block should rarely be hit with Promise.allSettled
      console.error('Unexpected error in loadData:', err);
    } finally {
      setLoadingData(false);
    }
  };

  const handleDownloadOfferLetter = async () => {
    setLoadingOfferLetter(true);
    try {
      const response = await api.get('/offer-letter/download', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'offer-letter.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to download offer letter');
    } finally {
      setLoadingOfferLetter(false);
    }
  };

  const handleSubmitGitHub = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await api.post('/tasks/submit-github', { githubUrl: githubUrlInput });
      setError(''); // Clear any previous errors
      // Clear input after successful submission
      setGithubUrlInput('');
      await loadData(); // This will reload and set submittedGithubUrl from backend
      // Success - could be replaced with toast notification in future
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!internship || !taskStatus?.allApproved) return;
    setLoadingPayment(true);
    setError('');
    try {
      const domainRes = await api.get('/domains');
      const domain = domainRes.data.find((d: any) => d.name === internship.domain);
      const amount = domain?.certificatePrice || 499;
      
      // Initiate payment (idempotent - returns existing pending payment if exists)
      const response = await api.post('/payment/initiate', { amount });
      setUpiUrl(response.data.upiUrl);
      setPaymentId(response.data.paymentId);
      setPaymentStatus({ 
        status: 'PENDING', 
        paymentId: response.data.paymentId, 
        amount: response.data.amount,
        upiUrl: response.data.upiUrl 
      });
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Payment initiation failed');
    } finally {
      setLoadingPayment(false);
    }
  };

  const handleSubmitTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentId || !transactionRef.trim()) {
      setError('Please enter transaction reference number');
      return;
    }
    setSubmittingTransaction(true);
    setError('');
    try {
      await api.post('/payment/submit-transaction', {
        paymentId,
        transactionReference: transactionRef.trim()
      });
      setTransactionRef('');
      await loadData(); // Reload to get updated payment status
    } catch (err: any) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Failed to submit transaction reference');
    } finally {
      setSubmittingTransaction(false);
    }
  };

  const handleDownloadCertificate = async () => {
    setLoadingCertificate(true);
    try {
      const response = await api.get('/certificate/download', { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'certificate.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Certificate not available');
    } finally {
      setLoadingCertificate(false);
    }
  };

  const sidebarItems = [
    { key: 'dashboard', label: 'Dashboard', href: '/student' },
    { key: 'offer-letter', label: 'Offer Letter', href: '/student' },
    { key: 'tasks', label: 'Tasks', href: '/student' },
    { key: 'submission', label: 'Submission', href: '/student' },
    { key: 'certificate', label: 'Certificate', href: '/student' },
  ];

  // Compare dates without time components - batch starts if start date is today or earlier
  const isBatchStarted = internship && (() => {
    if (!internship.batch?.startDate) return false;
    const batchStartDate = new Date(internship.batch.startDate);
    const today = new Date();
    // Set both to midnight for accurate date-only comparison
    batchStartDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return batchStartDate <= today;
  })();
  const allTasksApproved = taskStatus?.allApproved || false;
  const progress = internship ? (
    allTasksApproved ? 90 : 
    taskStatus?.approvedTasks > 0 ? 50 + (taskStatus.approvedTasks / taskStatus.totalTasks) * 30 :
    assignedTasks.length > 0 ? 30 : 10
  ) : 0;

  return (
    <div className="flex min-h-screen bg-[#EDEDED]">
      <Sidebar items={sidebarItems} />
      <div className="flex-1 p-4 md:p-8 w-full md:w-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0A284E]">Student Dashboard</h1>
            <Button variant="outline" onClick={logout} className="w-full sm:w-auto">Logout</Button>
          </div>

          {loadingData && !internship && (
            <Card className="mb-6">
              <SkeletonLoader variant="text" lines={3} />
            </Card>
          )}

          {error && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {internship && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideUp}
            >
              <Card className="mb-6">
                <h2 className="text-h3 font-heading font-semibold mb-4 md:mb-6 text-navy">Internship Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Domain</p>
                    <p className="font-semibold text-body-lg">{internship.domain}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="font-semibold text-body-lg">{internship.duration} Days</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Batch Start</p>
                    <p className="font-semibold text-body-lg">{new Date(internship.batch.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Batch End</p>
                    <p className="font-semibold text-body-lg">{new Date(internship.batch.endDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Status</p>
                    <Badge status={internship.batch.status.toLowerCase() as any} animated />
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-8"
          >
            <AnimatedProgressBar progress={progress} label="Internship Progress" />
          </motion.div>
          
          {/* Progress Timeline */}
          {internship && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-8"
            >
              <Card>
                <h3 className="text-h3 font-heading font-semibold mb-4 md:mb-6 text-navy">Progress Timeline</h3>
                <ProgressTimeline
                  milestones={[
                    { label: 'Registration', completed: true, current: false },
                    { label: 'Tasks Assigned', completed: assignedTasks.length > 0, current: assignedTasks.length > 0 && !allTasksApproved },
                    { label: 'Tasks Completed', completed: allTasksApproved, current: allTasksApproved },
                    { label: 'Certificate', completed: allTasksApproved, current: false },
                  ]}
                  progress={progress}
                />
              </Card>
            </motion.div>
          )}
          
          {/* Batch Countdown */}
          {internship && !isBatchStarted && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-8"
            >
              <Card className="bg-gradient-to-br from-electric-blue/5 to-transparent border-electric-blue/20">
                <h3 className="text-h3 font-heading font-semibold mb-4 text-navy">Batch Starts In</h3>
                <CountdownTimer targetDate={internship.batch.startDate} />
              </Card>
            </motion.div>
          )}

          <Card className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Offer Letter</h2>
            <Button onClick={handleDownloadOfferLetter} disabled={loadingOfferLetter} className="w-full sm:w-auto">
              {loadingOfferLetter ? 'Downloading...' : 'Download Offer Letter'}
            </Button>
          </Card>

          {isBatchStarted ? (
            <>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mt-6"
              >
                <Card>
                  <h2 className="text-h3 font-heading font-semibold mb-6 text-navy">Your Tasks</h2>
                  {loadingData ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <SkeletonLoader key={i} variant="rectangular" height="150px" />
                      ))}
                    </div>
                  ) : assignedTasks.length > 0 ? (
                    <div className="space-y-4">
                      {assignedTasks.map((studentTask, index) => (
                        <AnimatedTaskCard
                          key={studentTask.id}
                          task={studentTask}
                          taskNumber={index + 1}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-body text-gray-600">No tasks assigned yet. Tasks will be assigned when your batch starts.</p>
                  )}
                </Card>
              </motion.div>

              <Card className="mt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-semibold">GitHub Submission</h2>
                      <button
                        onClick={() => setShowGitHubGuide(true)}
                        className="p-1.5 hover:bg-slate-grey rounded-lg transition-colors"
                        title="View GitHub Submission Guide"
                      >
                        <HelpCircle className="w-5 h-5 text-electric-blue" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Submit ONE GitHub repository containing all your tasks. Repository structure should include Task-1, Task-2, etc. folders.
                    </p>
                  </div>
                </div>

                {/* Quick Help Links */}
                <div className="mb-4 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowGitHubGuide(true)}
                    className="text-xs px-3 py-1.5"
                  >
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    View Full Guide
                  </Button>
                  <Link href="/dashboard/github-guide" target="_blank">
                    <Button
                      variant="outline"
                      className="text-xs px-3 py-1.5"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      Open in New Tab
                    </Button>
                  </Link>
                  <button
                    onClick={() => setShowGitHubGuideExpanded(!showGitHubGuideExpanded)}
                    className="text-xs text-electric-blue hover:underline px-3 py-1.5"
                  >
                    {showGitHubGuideExpanded ? 'Hide' : 'Show'} Quick Guide
                  </button>
                </div>

                {/* Expandable Quick Guide */}
                {showGitHubGuideExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-4 overflow-hidden"
                  >
                    <Card className="bg-slate-grey border-electric-blue/20">
                      <h3 className="font-semibold text-navy mb-3">Quick Reference</h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="font-semibold">1.</span>
                          <span>Create public GitHub repository</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold">2.</span>
                          <span>Create folders: Task-1, Task-2, Task-3, etc.</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold">3.</span>
                          <span>Add README.md in root directory</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold">4.</span>
                          <span>Add at least 2 files to each task folder</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold">5.</span>
                          <span>Make commits over multiple days (min: 10/20/40 based on duration)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold">6.</span>
                          <span>Push to GitHub and submit URL</span>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-300">
                          <Link href="/dashboard/github-guide" className="text-electric-blue hover:underline text-sm font-medium">
                            View complete step-by-step guide →
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
                {submittedGithubUrl ? (
                  <div>
                    <p className="mb-2">Submitted: <a href={submittedGithubUrl} target="_blank" rel="noopener noreferrer" className="text-[#2D92F3] hover:underline">{submittedGithubUrl}</a></p>
                    <p className="text-sm text-gray-600 mb-2">
                      Status: {taskStatus?.approvedTasks || 0} of {taskStatus?.totalTasks || 0} tasks approved
                    </p>
                    {taskStatus?.allApproved ? (
                      <Badge status="approved" />
                    ) : (
                      <Badge status="pending" />
                    )}
                  </div>
                ) : (
                  <form onSubmit={handleSubmitGitHub} className="space-y-4">
                    {error && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        <strong>Error:</strong> {error}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="block text-sm font-medium text-charcoal">
                          GitHub Repository URL
                        </label>
                        <Tooltip 
                          content={
                            <div className="space-y-2">
                              <p className="font-semibold mb-1">Repository Requirements:</p>
                              <ul className="list-disc list-inside space-y-1 text-left">
                                <li>Must be a public repository</li>
                                <li>Format: https://github.com/username/repo-name</li>
                                <li>Must contain Task-1, Task-2, etc. folders</li>
                                <li>Must have README.md in root</li>
                              </ul>
                              <p className="mt-2 pt-2 border-t border-gray-700">
                                <a 
                                  href="/dashboard/github-guide" 
                                  target="_blank"
                                  className="text-electric-blue hover:underline font-semibold"
                                >
                                  View complete guide →
                                </a>
                              </p>
                            </div>
                          }
                          position="top"
                        />
                      </div>
                      <Input
                        value={githubUrlInput}
                        onChange={(e) => setGithubUrlInput(e.target.value)}
                        placeholder="https://github.com/username/repo"
                        required
                      />
                    </div>
                    <Button type="submit" disabled={loading || assignedTasks.length === 0}>
                      {loading ? 'Submitting...' : 'Submit GitHub Repository'}
                    </Button>
                  </form>
                )}
              </Card>

              {allTasksApproved && (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onAnimationComplete={() => {
                    // Trigger confetti when certificate unlock card appears
                    if (paymentStatus?.status === 'SUCCESS') {
                      triggerConfetti();
                    }
                  }}
                  className="mt-6"
                >
                  <Card className="bg-gradient-to-br from-electric-blue/10 to-transparent border-2 border-electric-blue">
                    <h2 className="text-h3 font-heading font-semibold mb-2 text-navy">Unlock Certificate</h2>
                    <p className="text-body text-gray-700 mb-4">All your tasks have been approved! Complete payment to unlock your certificate.</p>
                    
                    {paymentStatus?.status === 'SUCCESS' ? (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 font-semibold mb-2">✓ Payment Approved!</p>
                        <p className="text-sm text-green-700">Your certificate has been unlocked. You can download it below.</p>
                      </div>
                    ) : paymentStatus?.status === 'FAILED' ? (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
                        <p className="text-red-800 font-semibold mb-2">✗ Payment Rejected</p>
                        {paymentStatus.rejectedReason && (
                          <p className="text-sm text-red-700">Reason: {paymentStatus.rejectedReason}</p>
                        )}
                        <Button variant="cta" onClick={handlePayment} className="mt-3">
                          Try Again
                        </Button>
                      </div>
                    ) : paymentStatus?.status === 'PENDING' ? (
                      <div className="space-y-4">
                        <div className="text-center">
                          <p className="text-h3 font-heading font-bold text-navy mb-2">
                            Certificate Price: ₹{paymentStatus.amount || domainData?.certificatePrice || 'Loading...'}
                          </p>
                          <p className="text-sm text-gray-600 mb-4">Scan the QR code below to pay via UPI</p>
                        </div>
                        {(upiUrl || paymentStatus.upiUrl) ? (
                          <div className="flex justify-center mb-4">
                            <div className="p-4 bg-white rounded-lg border-2 border-gray-200">
                              <QRCodeSVG value={upiUrl || paymentStatus.upiUrl} size={256} />
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-4">
                            <p className="text-yellow-800 font-semibold mb-2">Loading QR Code...</p>
                            <p className="text-sm text-yellow-700">Please wait while we generate your payment QR code.</p>
                          </div>
                        )}
                        {paymentStatus.transactionReference ? (
                          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-800 font-semibold mb-2">Transaction Reference Submitted</p>
                            <p className="text-sm text-yellow-700">Reference: {paymentStatus.transactionReference}</p>
                            <p className="text-sm text-yellow-700 mt-2">Waiting for admin approval...</p>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmitTransaction} className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Transaction Reference Number
                              </label>
                              <Input
                                value={transactionRef}
                                onChange={(e) => setTransactionRef(e.target.value)}
                                placeholder="Enter UPI transaction reference"
                                required
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Enter the transaction reference number from your UPI payment confirmation
                              </p>
                            </div>
                            <Button type="submit" disabled={submittingTransaction} className="w-full">
                              {submittingTransaction ? 'Submitting...' : 'Submit Transaction Reference'}
                            </Button>
                          </form>
                        )}
                      </div>
                    ) : (
                      <div>
                        {internship && (
                          <div className="mb-6">
                            <p className="text-h3 font-heading font-bold text-navy">
                              Certificate Price: ₹{domainData?.certificatePrice || 'Loading...'}
                            </p>
                          </div>
                        )}
                        <Button variant="cta" onClick={handlePayment} disabled={loadingPayment} className="text-lg px-8 py-4">
                          {loadingPayment ? 'Initiating Payment...' : 'Pay & Unlock Certificate'}
                        </Button>
                      </div>
                    )}
                  </Card>
                </motion.div>
              )}

              {allTasksApproved && (
                <Card className="mt-6">
                  <h2 className="text-xl font-semibold mb-4">Certificate</h2>
                  <Button onClick={handleDownloadCertificate} disabled={loadingCertificate}>
                    {loadingCertificate ? 'Downloading...' : 'Download Certificate'}
                  </Button>
                </Card>
              )}
            </>
          ) : (
            <Card className="mt-6">
              <p className="text-gray-600">
                Your batch starts on {internship ? new Date(internship.batch.startDate).toLocaleDateString() : 'N/A'}. 
                Tasks and submissions will be unlocked when your batch starts.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

