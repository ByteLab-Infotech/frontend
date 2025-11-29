import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0,
    x: 40
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  }
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Hover lift effect
export const hoverLift = {
  scale: 1.02,
  y: -4,
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
};

// Card hover animation
export const cardHover = {
  y: -8,
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
};

// Button glow animation
export const buttonGlow = {
  boxShadow: '0 0 20px rgba(45, 146, 243, 0.4)',
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
};

// Icon zoom animation
export const iconZoom = {
  scale: 1.1,
  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
};

// Check animation utilities
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Animation duration constants
export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
};

// Easing functions
export const EASING = {
  ease: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
};

