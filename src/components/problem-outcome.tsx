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
    description: 'Every second of load time costs you customers and conversions',
    color: 'from-status-error to-red-600',
    accentColor: 'text-status-error',
    bgColor: 'bg-status-error/10',
    example: 'TechCorp lost 40% of checkout traffic due to 5s load times'
  },
  {
    icon: Search,
    title: 'SEO stuck below page one',
    description: 'Poor Core Web Vitals keep you invisible to search engines',
    color: 'from-status-warning to-yellow-600',
    accentColor: 'text-status-warning',
    bgColor: 'bg-status-warning/10',
    example: 'MedConnect ranked #47 for "patient portal" despite great content'
  },
  {
    icon: Zap,
    title: 'Ops glued together with manual work',
    description: 'Manual processes slow down releases and increase errors',
    color: 'from-status-info to-blue-600',
    accentColor: 'text-status-info',
    bgColor: 'bg-status-info/10',
    example: 'Manual deployments caused 3-hour delays and 15% error rate'
  }
];

const outcomes = [
  {
    metric: 'LCP < 2.0s',
    context: 'on 4G',
    description: 'Lightning-fast load times that keep users engaged',
    color: 'from-status-success to-green-600',
    accentColor: 'text-status-success',
    bgColor: 'bg-status-success/10',
    successStory: 'For TechCorp we cut checkout LCP from 5s to 1.2s and boosted signups +31%',
    progress: 85
  },
  {
    metric: '+20–40%',
    context: 'conversion lift',
    description: 'Measurable improvements in user engagement and sales',
    color: 'from-brand to-brand-accent',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10',
    successStory: 'MedConnect saw +70% patient engagement after optimizing their portal UX',
    progress: 92
  },
  {
    metric: '–50%',
    context: 'ops time per release',
    description: 'Automated workflows that accelerate development cycles',
    color: 'from-secondary-violet to-purple-600',
    accentColor: 'text-secondary-violet',
    bgColor: 'bg-secondary-violet/10',
    successStory: 'Automated CI/CD reduced deployment time from 3 hours to 15 minutes',
    progress: 78
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
                      <Card variant="glass" className={`border-${problem.accentColor.replace('text-', '')}/20 hover:border-${problem.accentColor.replace('text-', '')}/40 transition-all duration-300 group`}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${problem.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <problem.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className={`text-step-1 font-semibold text-white mb-2 group-hover:${problem.accentColor} transition-colors`}>
                                {problem.title}
                              </h4>
                              <p className="text-step-0 text-gray-400 leading-relaxed mb-3">
                                {problem.description}
                              </p>
                              <div className={`p-3 rounded-lg ${problem.bgColor} border-l-4 border-${problem.accentColor.replace('text-', '')}/30`}>
                                <p className="text-step--1 text-gray-300 italic">
                                  "Example: {problem.example}"
                                </p>
                              </div>
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
                      <Card variant="glass" className={`border-${outcome.accentColor.replace('text-', '')}/20 hover:border-${outcome.accentColor.replace('text-', '')}/40 transition-all duration-300 group`}>
                        <CardContent className="p-6">
                          <div className="text-center">
                            <div className="relative mb-4">
                              <div className={`text-step-4 font-bold ${outcome.accentColor} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                                {outcome.metric}
                              </div>
                              <div className={`absolute -top-2 -right-2 w-4 h-4 ${outcome.bgColor} rounded-full animate-pulse`} />
                            </div>
                            <div className="text-step-1 font-semibold text-white mb-3">
                              {outcome.context}
                            </div>
                            <p className="text-step-0 text-gray-400 leading-relaxed mb-4">
                              {outcome.description}
                            </p>
                            
                            {/* Progress Bar */}
                            <div className="mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-step--1 text-gray-400">Achievement</span>
                                <span className={`text-step--1 font-medium ${outcome.accentColor}`}>{outcome.progress}%</span>
                              </div>
                              <div className="w-full bg-bg-800 rounded-full h-2">
                                <motion.div
                                  className={`h-2 bg-gradient-to-r ${outcome.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${outcome.progress}%` }}
                                  transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                                />
                              </div>
                            </div>
                            
                            {/* Success Story */}
                            <div className={`p-3 rounded-lg ${outcome.bgColor} border-l-4 border-${outcome.accentColor.replace('text-', '')}/30`}>
                              <p className="text-step--1 text-gray-300 italic">
                                "Success: {outcome.successStory}"
                              </p>
                            </div>
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
