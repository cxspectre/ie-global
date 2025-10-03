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
    description: '4+ years of delivering exceptional digital solutions',
    color: 'from-brand to-brand-accent',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10'
  },
  {
    icon: MapPin,
    title: 'Remote-first EU',
    description: 'Serving clients across Europe and globally',
    color: 'from-secondary-emerald to-green-600',
    accentColor: 'text-secondary-emerald',
    bgColor: 'bg-secondary-emerald/10'
  },
  {
    icon: Shield,
    title: 'Security-cleared',
    description: 'Certified for regulated and enterprise clients',
    color: 'from-secondary-violet to-purple-600',
    accentColor: 'text-secondary-violet',
    bgColor: 'bg-secondary-violet/10'
  }
];

const timeline = [
  {
    year: '2020',
    milestone: 'Founded',
    description: 'Started with a vision to build high-performance digital solutions'
  },
  {
    year: '2021',
    milestone: 'First Enterprise Client',
    description: 'Delivered our first Microsoft 365 solution for a Fortune 500 company'
  },
  {
    year: '2022',
    milestone: 'AI Integration',
    description: 'Became early adopters of AI-driven development workflows'
  },
  {
    year: '2023',
    milestone: '50+ Projects',
    description: 'Reached milestone of 50 successful project deliveries'
  },
  {
    year: '2024',
    milestone: 'Global Expansion',
    description: 'Expanded services to serve clients across Europe and North America'
  }
];

const founders = [
  {
    name: 'Alex Chen',
    role: 'Founder & Lead Developer',
    quote: 'We believe technology should serve business goals, not the other way around.',
    expertise: ['Next.js', 'AI/ML', 'Enterprise Architecture'],
    color: 'from-brand to-brand-accent'
  },
  {
    name: 'Sarah Johnson',
    role: 'Co-founder & UX Director',
    quote: 'Great design is invisible - it just works, beautifully.',
    expertise: ['UX Strategy', 'Design Systems', 'Accessibility'],
    color: 'from-secondary-coral to-pink-600'
  }
];

export function AboutSnapshot() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-bg-900/30 via-bg-800/20 to-secondary-violet/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary-coral/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-step-4 font-display font-bold text-white mb-4">
            About IE Global
          </h2>
          <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
            We build high-performance systems for growth teams. Founded in 2020, we specialize in 
            custom web applications, mobile apps, and Microsoft 365 solutions that deliver 
            measurable business results.
          </p>
        </motion.div>

        {/* About Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card variant="glass" className="h-full group hover:border-brand/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${point.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className={`text-step-1 font-semibold text-white mb-2 group-hover:${point.accentColor} transition-colors`}>
                    {point.title}
                  </h4>
                  <p className="text-step-0 text-gray-400">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-step-3 font-display font-bold text-white text-center mb-8">
            Our Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-brand via-secondary-emerald to-secondary-violet" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <Card variant="glass" className="p-4">
                        <div className="text-step-1 font-bold text-brand mb-1">{item.year}</div>
                        <h4 className="text-step-0 font-semibold text-white mb-2">{item.milestone}</h4>
                        <p className="text-step--1 text-gray-400">{item.description}</p>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-brand rounded-full border-4 border-bg-900 z-10" />
                    
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-step-3 font-display font-bold text-white text-center mb-8">
            Meet the Founders
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full group hover:border-brand/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${founder.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <span className="text-white font-bold text-xl">
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="text-step-1 font-semibold text-white mb-1">{founder.name}</h4>
                      <p className="text-step--1 text-gray-400 mb-4">{founder.role}</p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${founder.color.replace('from-', 'bg-').replace(' to-', '/10')} border-l-4 border-${founder.color.split(' ')[0].replace('from-', '')}/30 mb-4`}>
                      <p className="text-step--1 text-gray-300 italic">
                        "{founder.quote}"
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="text-step--1 font-medium text-white mb-2">Expertise:</h5>
                      <div className="flex flex-wrap gap-1">
                        {founder.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-step--1 text-gray-400 bg-bg-800 rounded-full px-2 py-1 border border-gray-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/about">
            <Button variant="primary" size="lg" className="group">
              Learn more about our story
              <Users className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
