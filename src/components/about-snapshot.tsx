'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Shield, Calendar } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const aboutPoints = [
  {
    icon: Calendar,
    title: 'Founded 2020',
    description: '4+ years of delivering exceptional digital solutions'
  },
  {
    icon: MapPin,
    title: 'Remote-first EU',
    description: 'Serving clients across Europe and globally'
  },
  {
    icon: Shield,
    title: 'Security-cleared',
    description: 'Certified for regulated and enterprise clients'
  }
];

export function AboutSnapshot() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-6">
              About IE Global
            </h2>
            <p className="text-step-1 text-gray-400 mb-8 leading-body">
              IE Global builds high-performance systems for growth teams. We specialize in 
              custom web applications, mobile apps, and Microsoft 365 solutions that deliver 
              measurable business results.
            </p>
            
            <div className="space-y-4 mb-8">
              {aboutPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h4 className="text-step-0 font-medium text-white">
                      {point.title}
                    </h4>
                    <p className="text-step--1 text-gray-400">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="primary" size="lg" className="group">
                Meet the team
                <Users className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card variant="glass" className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">IE</span>
                </div>
                <h3 className="text-step-2 font-semibold text-white mb-4">
                  IE Global
                </h3>
                <p className="text-step-0 text-gray-400 mb-6">
                  AI-driven digital agency delivering custom web, app, and M365 solutions 
                  with a focus on performance, accessibility, and measurable results.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-step-2 font-bold text-brand">50+</div>
                    <div className="text-step--1 text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-step-2 font-bold text-brand">99.9%</div>
                    <div className="text-step--1 text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
