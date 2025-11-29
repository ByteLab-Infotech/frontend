import { create } from 'zustand';

interface Internship {
  id: number;
  domain: string;
  duration: number;
  batch: {
    id: number;
    startDate: string;
    endDate: string;
    status: string;
  };
  startDate: string;
  endDate: string;
  status: string;
}

interface Task {
  id: number;
  domain: string;
  title: string;
  level: number;
  description: string;
  levelName: string;
}

interface Submission {
  id: number;
  githubUrl: string;
  validated: boolean;
  submittedAt: string;
  validationMessage?: string;
}

interface InternshipState {
  internship: Internship | null;
  tasks: Task[];
  submission: Submission | null;
  setInternship: (internship: Internship) => void;
  setTasks: (tasks: Task[]) => void;
  setSubmission: (submission: Submission) => void;
}

export const useInternshipStore = create<InternshipState>((set) => ({
  internship: null,
  tasks: [],
  submission: null,
  setInternship: (internship) => set({ internship }),
  setTasks: (tasks) => set({ tasks }),
  setSubmission: (submission) => set({ submission }),
}));

