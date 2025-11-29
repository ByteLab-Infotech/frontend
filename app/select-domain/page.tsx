'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import api from '@/lib/api';

interface Domain {
  id: number;
  name: string;
  durations: number[];
  certificatePrice: number;
}

export default function SelectDomainPage() {
  const router = useRouter();
  const [domains, setDomains] = useState<Domain[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/domains').then((res) => setDomains(res.data)).catch(console.error);
  }, []);

  const availableDurations = domains.find(d => d.name === selectedDomain)?.durations || [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDomain || !selectedDuration) {
      setError('Please select domain and duration');
      return;
    }

    setLoading(true);
    try {
      await api.post('/internship/start', { domain: selectedDomain, duration: selectedDuration });
      router.push('/student');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to start internship');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EDEDED] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0A284E] mb-8">Select Your Internship</h1>
        
        <Card>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => {
                  setSelectedDomain(e.target.value);
                  setSelectedDuration(null);
                }}
                className="w-full border border-[#D0D0D0] rounded-md p-3"
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

            {selectedDomain && (
              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <div className="flex gap-4">
                  {availableDurations.map((duration) => (
                    <button
                      key={duration}
                      type="button"
                      onClick={() => setSelectedDuration(duration)}
                      className={`px-6 py-3 rounded-md border-2 transition-colors ${
                        selectedDuration === duration
                          ? 'border-[#2D92F3] bg-[#2D92F3] text-white'
                          : 'border-[#D0D0D0] bg-white hover:border-[#2D92F3]'
                      }`}
                    >
                      {duration} Days
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={loading || !selectedDomain || !selectedDuration}>
              {loading ? 'Starting...' : 'Start Internship'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

