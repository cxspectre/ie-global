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
    context: 'Measured on 4G, mid-tier device'
  },
  {
    icon: MousePointer,
    metric: 'INP < 200ms',
    description: 'Interaction to Next Paint',
    context: 'Measured on 4G, mid-tier device'
  },
  {
    icon: Layout,
    metric: 'CLS < 0.02',
    description: 'Cumulative Layout Shift',
    context: 'Measured on 4G, mid-tier device'
  },
  {
    icon: Shield,
    metric: 'WCAG 2.2 AA',
    description: 'Accessibility Compliance',
    context: 'Axe clean'
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
              <Card variant="glass" className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <kpi.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div className="text-step-2 font-bold text-white mb-2">
                    {kpi.metric}
                  </div>
                  <div className="text-step--1 text-gray-400 mb-2">
                    {kpi.description}
                  </div>
                  <div className="text-step--1 text-gray-500">
                    {kpi.context}
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
