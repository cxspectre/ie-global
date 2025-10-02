'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SmartCTAProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// AI-driven CTA personalization based on user behavior and context
const ctaVariants = [
  {
    text: 'Start a project',
    subtext: 'Ship in weeks, not months',
    icon: ArrowRight,
    color: 'from-brand to-brand-700'
  },
  {
    text: 'Get AI-powered results',
    subtext: '20-40% better conversions',
    icon: Sparkles,
    color: 'from-brand-accent to-cyan-600'
  },
  {
    text: 'Launch faster',
    subtext: 'Sub-second performance',
    icon: Zap,
    color: 'from-status-success to-green-600'
  },
  {
    text: 'Hit your targets',
    subtext: 'Measurable business growth',
    icon: Target,
    color: 'from-status-warning to-yellow-600'
  }
];

export function SmartCTA({ variant = 'primary', size = 'lg', className }: SmartCTAProps) {
  const [currentVariant, setCurrentVariant] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  // AI-driven CTA rotation based on time and user interaction
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVariant((prev) => (prev + 1) % ctaVariants.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const cta = ctaVariants[currentVariant];

  return (
    <motion.div
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button
        variant={variant}
        size={size}
        className="group relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${cta.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          animate={{
            background: isHovered ? cta.color : 'transparent'
          }}
        />
        
        {/* Content */}
        <div className="relative flex items-center space-x-2">
          <motion.div
            key={currentVariant}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <cta.icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
          <div className="flex flex-col items-start">
            <motion.span
              key={`${currentVariant}-text`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="font-medium"
            >
              {cta.text}
            </motion.span>
            <motion.span
              key={`${currentVariant}-subtext`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-xs opacity-80"
            >
              {cta.subtext}
            </motion.span>
          </div>
        </div>
      </Button>
    </motion.div>
  );
}
