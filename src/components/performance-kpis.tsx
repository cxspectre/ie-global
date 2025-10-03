'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Zap, MousePointer, Layout, Shield } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const kpis = [
  {
    icon: Zap,
    metric: 'LCP < 2.0s',
    description: 'Largest Contentful Paint',
    context: 'Measured on 4G, mid-tier device',
    color: 'from-brand to-brand-accent',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10',
    progress: 95,
    tooltip: 'Time for the largest content element to render. Critical for user experience and SEO rankings.'
  },
  {
    icon: MousePointer,
    metric: 'INP < 200ms',
    description: 'Interaction to Next Paint',
    context: 'Measured on 4G, mid-tier device',
    color: 'from-secondary-emerald to-green-600',
    accentColor: 'text-secondary-emerald',
    bgColor: 'bg-secondary-emerald/10',
    progress: 88,
    tooltip: 'Time from user interaction to visual response. Essential for responsive, engaging interfaces.'
  },
  {
    icon: Layout,
    metric: 'CLS < 0.02',
    description: 'Cumulative Layout Shift',
    context: 'Measured on 4G, mid-tier device',
    color: 'from-secondary-amber to-yellow-600',
    accentColor: 'text-secondary-amber',
    bgColor: 'bg-secondary-amber/10',
    progress: 92,
    tooltip: 'Visual stability measure. Low CLS prevents jarring layout shifts during page load.'
  },
  {
    icon: Shield,
    metric: 'WCAG 2.2 AA',
    description: 'Accessibility Compliance',
    context: 'Axe clean',
    color: 'from-secondary-violet to-purple-600',
    accentColor: 'text-secondary-violet',
    bgColor: 'bg-secondary-violet/10',
    progress: 100,
    tooltip: 'Web Content Accessibility Guidelines compliance ensures your site is usable by everyone.'
  }
];

export function PerformanceKPIs() {
  return (
    <section className="py-16 lg:py-24 bg-bg-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-step-3 font-display font-bold text-white mb-4">
            Performance & Accessibility KPIs
          </h2>
          <p className="text-step-0 text-gray-400 max-w-2xl mx-auto">
            We guarantee these performance standards on every project, 
            measured on 4G networks with mid-tier devices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.metric}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glass" className="group hover:border-brand/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${kpi.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <kpi.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-step-2 font-bold ${kpi.accentColor} mb-1`}>
                        {kpi.metric}
                      </div>
                      <div className="text-step--1 text-gray-400">
                        {kpi.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-step--1 text-gray-400">Achievement</span>
                      <span className={`text-step--1 font-medium ${kpi.accentColor}`}>{kpi.progress}%</span>
                    </div>
                    <div className="w-full bg-bg-800 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${kpi.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${kpi.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-step--1 text-gray-500 mb-3">
                    {kpi.context}
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`p-2 rounded-lg ${kpi.bgColor} border-l-4 border-${kpi.accentColor.replace('text-', '')}/30`}>
                    <p className="text-step--1 text-gray-300 italic">
                      {kpi.tooltip}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
