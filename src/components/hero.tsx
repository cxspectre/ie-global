'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';

const badges = [
  'AI-driven solutions',
  'Sub-second performance',
  'WCAG AA compliant',
  '99.9% uptime',
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-950 via-bg-900 to-brand/5 dark:from-bg-950 dark:via-bg-900 dark:to-brand/5 light:from-light-50 light:via-light-100 light:to-brand/20" />
      
      {/* Animated AI-themed background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand/20 to-brand-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-brand-accent/20 to-secondary-violet/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-secondary-coral/10 to-secondary-amber/10 rounded-full blur-2xl"
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-step--1 font-medium text-brand">
                AI-driven digital agency
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-step-5 font-display font-bold text-white leading-tight tracking-tight"
            >
              Custom websites that{' '}
              <motion.span 
                className="text-brand relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                load in &lt;1s
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </motion.span>{' '}
              and convert 20–40% better
            </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-step-1 text-gray-300 max-w-2xl leading-body"
              >
                We ship high-performance web apps, iOS, and M365 systems that move KPIs. 
                Edge-rendered. Secure. Accessible.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="primary" size="lg" className="group relative overflow-hidden">
                  <motion.span
                    className="relative z-10 flex items-center"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    Start a project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand to-brand-accent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="ghost" size="lg" className="group">
                  See our work
                  <motion.div
                    className="ml-2 w-4 h-4 border-2 border-current rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              {['Edge-rendered', '99.9% uptime', 'WCAG AA', 'Sub-second LCP'].map((prop, index) => (
                <div key={prop} className="flex items-center space-x-2 bg-bg-800/50 border border-gray-400/20 rounded-full px-3 py-1">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <span className="text-step--1 text-gray-300">{prop}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Custom AI-themed Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* AI Neural Network Visualization */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="glass rounded-3xl p-8 space-y-6 relative overflow-hidden">
                {/* AI Neural Network Nodes */}
                <div className="relative h-64">
                  <motion.div
                    className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-brand rounded-full" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-8 right-6 w-8 h-8 bg-gradient-to-r from-secondary-coral to-secondary-amber rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.div
                    className="absolute bottom-16 left-6 w-6 h-6 bg-gradient-to-r from-secondary-emerald to-brand-accent rounded-full"
                    animate={{ 
                      scale: [1, 0.8, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.div
                    className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-r from-secondary-violet to-brand rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                    <motion.path
                      d="M 40 40 Q 150 100 260 80"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.path
                      d="M 50 140 Q 150 80 250 120"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, delay: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2A7FFF" />
                        <stop offset="100%" stopColor="#18C8D8" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6B6B" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Floating Code Elements */}
                  <motion.div
                    className="absolute top-2 left-2 text-step--1 font-mono text-gray-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    &lt;AI&gt;
                  </motion.div>
                  <motion.div
                    className="absolute bottom-2 right-2 text-step--1 font-mono text-gray-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                  >
                    /&gt;
                  </motion.div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass rounded-full px-3 py-1"
              >
                <span className="text-step--1 font-medium text-brand">+40% conversion</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-full px-3 py-1"
              >
                <span className="text-step--1 font-medium text-brand-accent">&lt;1s load time</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-brand rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

