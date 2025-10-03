'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

import { Button } from '@/components/ui/button';

const badges = [
  { text: 'AI-driven solutions', icon: Zap, color: 'from-brand to-brand-accent' },
  { text: 'Sub-second performance', icon: TrendingUp, color: 'from-secondary-emerald to-green-600' },
  { text: 'WCAG AA compliant', icon: Shield, color: 'from-secondary-amber to-yellow-600' },
  { text: '99.9% uptime', icon: Globe, color: 'from-secondary-violet to-purple-600' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced multi-layered background with electric blue to cyan gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-950 via-bg-900 to-brand/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-bg-900/30 to-secondary-violet/15" />
      <div className="absolute inset-0 bg-gradient-to-bl from-brand/5 via-transparent to-secondary-coral/5" />
      
      {/* Sophisticated floating geometric shapes with more depth and movement */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-r from-brand/25 to-brand-accent/25 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360],
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-brand-accent/25 to-secondary-violet/25 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.4, 0.6],
            rotate: [360, 180, 0],
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[24rem] h-[24rem] bg-gradient-to-r from-secondary-coral/15 to-secondary-amber/15 rounded-full blur-2xl"
          animate={{ 
            x: [0, 120, -80, 0],
            y: [0, -60, 80, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional floating elements with more sophisticated movement */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-40 h-40 bg-gradient-to-r from-secondary-emerald/20 to-brand-accent/20 rounded-full blur-2xl"
          animate={{ 
            y: [0, -40, 40, 0],
            x: [0, 30, -20, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-gradient-to-r from-secondary-amber/15 to-secondary-coral/15 rounded-full blur-2xl"
          animate={{ 
            x: [0, 60, -40, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, -90, -180, -270, -360]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* New floating elements for more visual interest */}
        <motion.div 
          className="absolute top-1/6 right-1/6 w-24 h-24 bg-gradient-to-r from-secondary-violet/20 to-brand/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 20, 0],
            rotate: [0, 180, 360],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/6 left-1/6 w-32 h-32 bg-gradient-to-r from-brand-accent/15 to-secondary-emerald/15 rounded-full blur-xl"
          animate={{ 
            x: [0, 25, -15, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 relative"
          >
            {/* Subtle glass background for content */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg-900/20 via-transparent to-bg-800/10 rounded-3xl blur-xl -z-10" />
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass border-brand/30 rounded-full px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-sm font-medium text-brand">
                AI-driven digital agency
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight"
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
                className="text-lg text-gray-300 max-w-2xl leading-relaxed"
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

            {/* Enhanced Trust chips with icons and gradients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              {badges.map((badge, index) => (
                <motion.div 
                  key={badge.text} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center space-x-3 glass border-gray-400/30 rounded-full px-4 py-3 backdrop-blur-sm hover:border-brand/40 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    className={`w-8 h-8 bg-gradient-to-r ${badge.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <badge.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced 3D AI-themed Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Sophisticated AI Neural Network Visualization */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="glass rounded-3xl p-8 space-y-6 relative overflow-hidden border-brand/20">
                {/* Enhanced background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-secondary-violet/5 rounded-3xl" />
                
                {/* AI Neural Network Nodes with 3D effect */}
                <div className="relative h-80">
                  {/* Central Hub */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center shadow-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      boxShadow: [
                        "0 0 20px rgba(42, 127, 255, 0.3)",
                        "0 0 40px rgba(42, 127, 255, 0.6)",
                        "0 0 20px rgba(42, 127, 255, 0.3)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-brand rounded-full animate-pulse" />
                    </div>
                  </motion.div>
                  
                  {/* Orbiting Nodes */}
                  <motion.div
                    className="absolute top-8 right-8 w-10 h-10 bg-gradient-to-r from-secondary-coral to-secondary-amber rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.div
                    className="absolute bottom-12 left-8 w-8 h-8 bg-gradient-to-r from-secondary-emerald to-brand-accent rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 0.9, 1],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.div
                    className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-secondary-violet to-brand rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <motion.div
                    className="absolute top-16 left-12 w-6 h-6 bg-gradient-to-r from-secondary-amber to-secondary-coral rounded-full shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 90, 180, 270, 360]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Enhanced Connecting Lines with pulsing effect */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                    <motion.path
                      d="M 200 150 Q 300 100 350 100"
                      stroke="url(#gradient1)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    <motion.path
                      d="M 200 150 Q 100 200 50 200"
                      stroke="url(#gradient2)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.5, delay: 1.5 }}
                    />
                    <motion.path
                      d="M 200 150 Q 150 50 200 50"
                      stroke="url(#gradient3)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 3, delay: 2 }}
                    />
                    <motion.path
                      d="M 200 150 Q 250 200 300 250"
                      stroke="url(#gradient4)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2.8, delay: 2.3 }}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2A7FFF" />
                        <stop offset="100%" stopColor="#18C8D8" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF6B6B" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#18C8D8" />
                      </linearGradient>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#2A7FFF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Enhanced floating code elements */}
                  <motion.div
                    className="absolute top-4 left-4 text-sm font-mono text-gray-400 bg-bg-800/50 px-2 py-1 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    &lt;AI&gt;
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 right-4 text-sm font-mono text-gray-400 bg-bg-800/50 px-2 py-1 rounded"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                  >
                    /&gt;
                  </motion.div>
                  <motion.div
                    className="absolute top-1/2 left-4 text-xs font-mono text-gray-500 bg-bg-800/30 px-2 py-1 rounded"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                  >
                    neural
                  </motion.div>
                </div>
              </div>
              
              {/* Enhanced floating badges with glass effect */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass rounded-full px-4 py-2 border-brand/30"
              >
                <span className="text-sm font-medium text-brand flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>+40% conversion</span>
                </span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute -bottom-6 -left-6 glass rounded-full px-4 py-2 border-brand-accent/30"
              >
                <span className="text-sm font-medium text-brand-accent flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>&lt;1s load time</span>
                </span>
              </motion.div>
              
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/4 -left-8 glass rounded-full px-3 py-1 border-secondary-emerald/30"
              >
                <span className="text-xs font-medium text-secondary-emerald">99.9% uptime</span>
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


