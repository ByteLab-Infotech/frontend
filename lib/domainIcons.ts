import {
  Globe,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Code2,
  Brain,
  Server,
  Monitor,
  Terminal,
  Layers,
  Smartphone as AppIcon,
  FileCode,
  Coffee,
  Cpu,
  Code,
  Settings,
  Sparkles,
  BarChart3,
  Dna,
  Megaphone,
  TrendingUp,
  DollarSign,
  Users,
  Briefcase,
  PenTool,
  Palette,
  Image as ImageIcon,
  type LucideIcon,
} from 'lucide-react';

export interface DomainIconConfig {
  icon: LucideIcon;
  color: string;
}

// Comprehensive icon mapping for all 25 domains
export const domainIconMap: Record<string, DomainIconConfig> = {
  'Web Development': {
    icon: Globe,
    color: 'text-blue-500',
  },
  'Data Science': {
    icon: Database,
    color: 'text-purple-500',
  },
  'Mobile Development': {
    icon: Smartphone,
    color: 'text-green-500',
  },
  'Cloud Computing': {
    icon: Cloud,
    color: 'text-orange-500',
  },
  'Cybersecurity': {
    icon: Shield,
    color: 'text-red-500',
  },
  'Frontend Developer': {
    icon: Monitor,
    color: 'text-blue-600',
  },
  'Backend Developer': {
    icon: Server,
    color: 'text-indigo-600',
  },
  'Full Stack Developer': {
    icon: Layers,
    color: 'text-cyan-600',
  },
  'App Developer': {
    icon: AppIcon,
    color: 'text-green-600',
  },
  'Python Programming': {
    icon: FileCode,
    color: 'text-yellow-500',
  },
  'Java Programming': {
    icon: Coffee,
    color: 'text-orange-600',
  },
  'C++ Programming': {
    icon: Cpu,
    color: 'text-blue-700',
  },
  'C Programming': {
    icon: Code,
    color: 'text-gray-700',
  },
  'DevOps': {
    icon: Settings,
    color: 'text-teal-600',
  },
  'AI': {
    icon: Sparkles,
    color: 'text-pink-500',
  },
  'Data Analytics': {
    icon: BarChart3,
    color: 'text-purple-600',
  },
  'Bioinformatics': {
    icon: Dna,
    color: 'text-emerald-600',
  },
  'Digital Marketing': {
    icon: Megaphone,
    color: 'text-rose-500',
  },
  'Business Strategy': {
    icon: TrendingUp,
    color: 'text-amber-600',
  },
  'Finance & Investment': {
    icon: DollarSign,
    color: 'text-green-700',
  },
  'HR': {
    icon: Users,
    color: 'text-sky-600',
  },
  'Stock Market Trading': {
    icon: Briefcase,
    color: 'text-emerald-700',
  },
  'Content Writing': {
    icon: PenTool,
    color: 'text-violet-600',
  },
  'UI/UX': {
    icon: Palette,
    color: 'text-fuchsia-600',
  },
  'Graphics Automation': {
    icon: ImageIcon,
    color: 'text-pink-600',
  },
};

// Helper function to get icon config for a domain
export function getDomainIcon(domainName: string): DomainIconConfig {
  return domainIconMap[domainName] || {
    icon: Code2,
    color: 'text-gray-500',
  };
}

// Helper function to generate slug from domain name
export function domainNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

