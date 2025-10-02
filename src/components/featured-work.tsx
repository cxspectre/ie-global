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
    accentColor: 'text-brand'
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
    accentColor: 'text-secondary-emerald'
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
                  <div>
                    <h4 className="text-step--1 font-medium text-white mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-bg-800 text-step--1 text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href={caseStudy.link}>
                    <Button variant="primary" size="sm" className="w-full group">
                      View case
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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
