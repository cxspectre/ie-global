'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, TrendingUp, Clock, Search, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  {
    icon: Clock,
    title: 'Slow pages bleed revenue',
    description: 'Every second of load time costs you customers and conversions'
  },
  {
    icon: Search,
    title: 'SEO stuck below page one',
    description: 'Poor Core Web Vitals keep you invisible to search engines'
  },
  {
    icon: Zap,
    title: 'Ops glued together with manual work',
    description: 'Manual processes slow down releases and increase errors'
  }
];

const outcomes = [
  {
    metric: 'LCP < 2.0s',
    context: 'on 4G',
    description: 'Lightning-fast load times that keep users engaged'
  },
  {
    metric: '+20–40%',
    context: 'conversion lift',
    description: 'Measurable improvements in user engagement and sales'
  },
  {
    metric: '–50%',
    context: 'ops time per release',
    description: 'Automated workflows that accelerate development cycles'
  }
];

export function ProblemOutcome() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-bg-900/30 via-bg-800/20 to-secondary-violet/5 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary-coral/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary-emerald/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-secondary-amber/5 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-step-4 font-display font-bold text-white mb-4">
            Ship faster. Rank higher. Convert more.
          </h2>
          <p className="text-step-1 text-gray-300 max-w-2xl mx-auto">
            We solve the performance bottlenecks that hold your business back
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-step-2 font-semibold text-white mb-8 flex items-center">
              <TrendingDown className="w-6 h-6 text-status-error mr-3" />
              Common Pain Points
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                    <motion.div
                      key={problem.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <Card variant="glass" className="border-status-error/20 hover:border-status-error/40 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-status-error/20 to-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <problem.icon className="w-6 h-6 text-status-error" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-step-1 font-semibold text-white mb-2 group-hover:text-status-error transition-colors">
                                {problem.title}
                              </h4>
                              <p className="text-step-0 text-gray-400 leading-relaxed">
                                {problem.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-step-2 font-semibold text-white mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 text-status-success mr-3" />
              Measurable Results
            </h3>
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                    <motion.div
                      key={outcome.metric}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <Card variant="glass" className="border-status-success/20 hover:border-status-success/40 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="relative mb-4">
                              <div className="text-step-4 font-bold text-status-success mb-1 group-hover:scale-110 transition-transform duration-300">
                                {outcome.metric}
                              </div>
                              <div className="absolute -top-2 -right-2 w-4 h-4 bg-status-success/20 rounded-full animate-pulse" />
                            </div>
                            <div className="text-step-1 font-semibold text-white mb-3">
                              {outcome.context}
                            </div>
                            <p className="text-step-0 text-gray-400 leading-relaxed">
                              {outcome.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Audit my site
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
              <p className="text-step--1 text-gray-400 mt-3">
                Get a 5-page report on speed, SEO, and UX. Free, no fluff.
              </p>
            </motion.div>
      </div>
    </section>
  );
}
