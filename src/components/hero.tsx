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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-950 via-bg-900 to-brand/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
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

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Device mockup placeholder */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="glass rounded-3xl p-8 space-y-6">
                {/* Browser mockup */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-status-error rounded-full" />
                    <div className="w-3 h-3 bg-status-warning rounded-full" />
                    <div className="w-3 h-3 bg-status-success rounded-full" />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-brand to-brand-accent rounded-lg" />
                </div>
                
                {/* Content blocks */}
                <div className="space-y-3">
                  <div className="h-4 bg-gray-400 rounded w-3/4" />
                  <div className="h-4 bg-gray-400 rounded w-1/2" />
                  <div className="h-4 bg-gray-400 rounded w-5/6" />
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

