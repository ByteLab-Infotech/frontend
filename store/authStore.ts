import { create } from 'zustand';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  college?: string;
  city?: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  initialize: () => Promise<void>;
}

const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

export const useAuthStore = create<AuthState>((set, get) => {
  // Initialize from localStorage on store creation
  let initialUser: User | null = null;
  let initialToken: string | null = null;
  
  if (typeof window !== 'undefined') {
    initialToken = localStorage.getItem('token');
    initialUser = getStoredUser();
  }

  return {
    user: initialUser,
    token: initialToken,
    setAuth: (user, token) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      set({ user, token });
    },
    logout: () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      set({ user: null, token: null });
    },
    initialize: async () => {
      if (typeof window === 'undefined') return;
      
      const token = localStorage.getItem('token');
      const user = getStoredUser();
      
      if (token && user) {
        // Verify token is still valid by calling /auth/me
        try {
          const api = (await import('@/lib/api')).default;
          const response = await api.get('/auth/me');
          set({ user: response.data, token });
          // Update stored user in case it changed
          localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
          // Token is invalid, clear everything
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          set({ user: null, token: null });
        }
      } else {
        set({ user: null, token: null });
      }
    },
  };
});

