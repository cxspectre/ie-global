'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredCases = [
  {
    client: 'TechCorp',
    sector: 'E-commerce',
    year: '2024',
    headline: '+31% signup rate in 6 weeks',
    stack: ['Next.js', 'Vercel', 'Sanity'],
    link: '/work/techcorp-ecommerce',
    metric: '+31%',
    metricLabel: 'signup rate',
    timeframe: '6 weeks',
    problem: 'Slow checkout process causing 40% cart abandonment',
    color: 'from-brand to-brand-700',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10',
    beforeAfter: {
      before: { lcp: '5.2s', conversion: '2.1%', bounce: '68%' },
      after: { lcp: '1.2s', conversion: '2.8%', bounce: '42%' }
    },
    approach: 'Optimized checkout flow, implemented edge caching, and redesigned UX for mobile-first experience',
    techUsed: ['Next.js 15', 'Vercel Edge', 'Sanity CMS', 'Stripe', 'Tailwind CSS']
  },
  {
    client: 'MedConnect',
    sector: 'Healthcare',
    year: '2024',
    headline: '+70% patient engagement',
    stack: ['React Native', 'AWS', 'Firebase'],
    link: '/work/healthcare-app',
    metric: '+70%',
    metricLabel: 'patient engagement',
    timeframe: '3 months',
    problem: 'Poor Core Web Vitals affecting patient portal usage',
    color: 'from-secondary-emerald to-green-600',
    accentColor: 'text-secondary-emerald',
    bgColor: 'bg-secondary-emerald/10',
    beforeAfter: {
      before: { lcp: '4.8s', engagement: '23%', retention: '45%' },
      after: { lcp: '1.8s', engagement: '39%', retention: '78%' }
    },
    approach: 'Redesigned patient portal with offline-first architecture and real-time notifications',
    techUsed: ['React Native', 'AWS Amplify', 'Firebase', 'GraphQL', 'Offline Sync']
  }
];

export function FeaturedWork() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-step-4 font-display font-bold text-white mb-4">
            Real results
          </h2>
          <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
            Measurable improvements that drive business growth across industries and use cases.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card variant="glass" className="h-full cursor-pointer group hover:border-brand/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-step--1 text-gray-400">
                        <span>{caseStudy.client}</span>
                        <span>•</span>
                        <span>{caseStudy.sector}</span>
                        <span>•</span>
                        <span>{caseStudy.year}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-status-success">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-step--1 font-medium">Before/After + {caseStudy.timeframe}</span>
                      </div>
                    </div>
                    
                    {/* Problem Statement */}
                    <div className="mb-4 p-3 rounded-lg bg-bg-800/50 border-l-4 border-status-error/30">
                      <p className="text-step--1 text-gray-300 italic">
                        "Problem: {caseStudy.problem}"
                      </p>
                    </div>
                    
                    {/* Before/After Visualization */}
                    <div className="mb-6 p-4 rounded-lg bg-bg-800/30 border border-gray-700/50">
                      <h4 className="text-step--1 font-medium text-white mb-3 text-center">Performance Comparison</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-step--2 text-gray-400 mb-2">Before</div>
                          <div className="space-y-1">
                            <div className="text-step--1 text-status-error">LCP: {caseStudy.beforeAfter.before.lcp}</div>
                            <div className="text-step--1 text-status-error">Conversion: {caseStudy.beforeAfter.before.conversion}</div>
                            <div className="text-step--1 text-status-error">Bounce: {caseStudy.beforeAfter.before.bounce}</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-step--2 text-gray-400 mb-2">After</div>
                          <div className="space-y-1">
                            <div className="text-step--1 text-status-success">LCP: {caseStudy.beforeAfter.after.lcp}</div>
                            <div className="text-step--1 text-status-success">Conversion: {caseStudy.beforeAfter.after.conversion}</div>
                            <div className="text-step--1 text-status-success">Bounce: {caseStudy.beforeAfter.after.bounce}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-6">
                      <motion.div 
                        className={`text-step-4 font-bold ${caseStudy.accentColor} mb-2`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {caseStudy.metric}
                      </motion.div>
                      <div className="text-step-1 font-medium text-white">
                        {caseStudy.metricLabel}
                      </div>
                    </div>

                    <CardTitle className="text-step-2 text-center mb-4 group-hover:text-brand transition-colors">
                      {caseStudy.headline}
                    </CardTitle>
                  </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Approach */}
                  <div className={`p-3 rounded-lg ${caseStudy.bgColor} border-l-4 border-${caseStudy.accentColor.replace('text-', '')}/30`}>
                    <h4 className="text-step--1 font-medium text-white mb-2">Our Approach:</h4>
                    <p className="text-step--1 text-gray-300">
                      {caseStudy.approach}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-step--1 font-medium text-white mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.techUsed.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-bg-800 text-step--1 text-gray-300 rounded-full border border-gray-700/50 hover:border-brand/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link href={caseStudy.link} className="flex-1">
                      <Button variant="primary" size="sm" className="w-full group">
                        View full case
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" className="group">
                      <span className="text-step--1">Download PDF</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
