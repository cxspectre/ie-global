'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Shield, Server, Zap, Code, Cloud, Settings } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Globe,
    title: 'Websites & Web Apps',
    tagline: 'Jam-stacked. CMS-friendly. Built for scale.',
    bullets: ['Next.js 15, RSC', 'Design systems', 'Headless CMS/MDX'],
    link: '/services/websites',
    color: 'from-brand to-brand-700',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10'
  },
  {
    icon: Smartphone,
    title: 'iOS & Cross-Platform Apps',
    tagline: 'Native feel. Real-time data.',
    bullets: ['Swift + RN', 'Offline-first', 'Store deploy'],
    link: '/services/apps',
    color: 'from-secondary-coral to-pink-600',
    accentColor: 'text-secondary-coral',
    bgColor: 'bg-secondary-coral/10'
  },
  {
    icon: Shield,
    title: 'Microsoft 365 & Intune',
    tagline: 'Secure devices. Zero-touch rollout.',
    bullets: ['ABM/Intune', 'Conditional access', 'Automation'],
    link: '/services/m365',
    color: 'from-secondary-emerald to-green-600',
    accentColor: 'text-secondary-emerald',
    bgColor: 'bg-secondary-emerald/10'
  },
  {
    icon: Server,
    title: 'Hosting & Care Plans',
    tagline: '99.9% uptime. Proactive monitoring.',
    bullets: ['Edge hosting', 'Backups & WAF', '24/7 alerts'],
    link: '/services/hosting',
    color: 'from-secondary-amber to-yellow-600',
    accentColor: 'text-secondary-amber',
    bgColor: 'bg-secondary-amber/10'
  }
];

export function ServicesSnapshot() {
  return (
    <section className="py-20 lg:py-32 bg-bg-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-step-4 font-display font-bold text-white mb-4">
            Services Snapshot
          </h2>
          <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions that deliver measurable results across 
            web, mobile, enterprise, and infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.link} className="block h-full">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card variant="glass" className="h-full cursor-pointer group hover:border-brand/40 transition-all duration-300">
                    <CardHeader>
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-step-2 group-hover:text-brand transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-step-0">
                        {service.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                            <div className={`w-1.5 h-1.5 ${service.bgColor} rounded-full`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-2">
                        <span className={`text-step--1 font-medium ${service.accentColor} group-hover:translate-x-1 transition-transform`}>
                          See deliverables
                        </span>
                        <ArrowRight className={`w-4 h-4 ${service.accentColor} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
