'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(true);

  React.useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg glass hover:glass-strong border border-gray-400/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-bg-950 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : 180,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 0.3, ease: 'easeInOut' },
          scale: { duration: 0.2, ease: 'easeInOut' }
        }}
        className="relative w-5 h-5"
      >
        <motion.div
          initial={false}
          animate={{ 
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-secondary-amber group-hover:text-secondary-amber/80 transition-colors" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-brand-light group-hover:text-brand-light/80 transition-colors" />
        </motion.div>
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isDark ? 0.3 : 0.1,
          scale: isDark ? 1.2 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary-amber/20 to-brand-light/20 blur-sm -z-10"
      />
    </button>
  );
}
