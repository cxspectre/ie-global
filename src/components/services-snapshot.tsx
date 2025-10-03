'use client';

import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Shield, Server, Zap, Code, Cloud, Settings, ChevronDown, Clock, CheckCircle } from 'lucide-react';
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
    bgColor: 'bg-brand/10',
    description: 'High-performance web applications that load in under 1 second and convert 20-40% better than traditional sites.',
    timeframe: '4-12 weeks',
    deliverables: ['Custom design system', 'Performance optimization', 'SEO foundation', 'Analytics setup'],
    microCase: {
      client: 'TechCorp',
      metric: '+31%',
      metricLabel: 'signup rate',
      timeframe: '6 weeks'
    }
  },
  {
    icon: Smartphone,
    title: 'iOS & Cross-Platform Apps',
    tagline: 'Native feel. Real-time data.',
    bullets: ['Swift + RN', 'Offline-first', 'Store deploy'],
    link: '/services/apps',
    color: 'from-secondary-coral to-pink-600',
    accentColor: 'text-secondary-coral',
    bgColor: 'bg-secondary-coral/10',
    description: 'Native and cross-platform mobile apps with offline capabilities and seamless user experiences.',
    timeframe: '8-16 weeks',
    deliverables: ['App store deployment', 'Push notifications', 'Offline sync', 'Performance monitoring'],
    microCase: {
      client: 'MedConnect',
      metric: '+70%',
      metricLabel: 'patient engagement',
      timeframe: '3 months'
    }
  },
  {
    icon: Shield,
    title: 'Microsoft 365 & Intune',
    tagline: 'Secure devices. Zero-touch rollout.',
    bullets: ['ABM/Intune', 'Conditional access', 'Automation'],
    link: '/services/m365',
    color: 'from-secondary-emerald to-green-600',
    accentColor: 'text-secondary-emerald',
    bgColor: 'bg-secondary-emerald/10',
    description: 'Enterprise-grade device management and security solutions with automated deployment workflows.',
    timeframe: '2-6 weeks',
    deliverables: ['Device enrollment', 'Security policies', 'App deployment', 'Compliance reporting'],
    microCase: {
      client: 'Enterprise Corp',
      metric: '-75%',
      metricLabel: 'setup time',
      timeframe: '2 weeks'
    }
  },
  {
    icon: Server,
    title: 'Hosting & Care Plans',
    tagline: '99.9% uptime. Proactive monitoring.',
    bullets: ['Edge hosting', 'Backups & WAF', '24/7 alerts'],
    link: '/services/hosting',
    color: 'from-secondary-amber to-yellow-600',
    accentColor: 'text-secondary-amber',
    bgColor: 'bg-secondary-amber/10',
    description: 'Reliable hosting infrastructure with proactive monitoring and automated scaling capabilities.',
    timeframe: 'Ongoing',
    deliverables: ['Infrastructure setup', 'Monitoring dashboard', 'Backup strategy', 'Performance optimization'],
    microCase: {
      client: 'Global Corp',
      metric: '99.9%',
      metricLabel: 'uptime SLA',
      timeframe: '12 months'
    }
  }
];

export function ServicesSnapshot() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-bg-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary-coral/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
              viewport={{ once: true }}
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
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                          whileHover={{ rotate: 5 }}
                        >
                          <service.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        {/* Micro-case metric badge */}
                        <div className={`text-right ${service.bgColor} rounded-lg px-3 py-2 border border-${service.accentColor.replace('text-', '')}/20`}>
                          <div className={`text-step-1 font-bold ${service.accentColor}`}>
                            {service.microCase.metric}
                          </div>
                          <div className="text-step--2 text-gray-400">
                            {service.microCase.metricLabel}
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-step-2 group-hover:text-brand transition-colors mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-step-0 mb-3">
                        {service.tagline}
                      </CardDescription>
                      
                      {/* Time to value */}
                      <div className="flex items-center space-x-2 text-step--1 text-gray-400 mb-4">
                        <Clock className="w-4 h-4" />
                        <span>Launch in {service.timeframe}</span>
                      </div>
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
                      {/* Expandable Panel */}
                      <div className="pt-2">
                        <button
                          onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <span className={`text-step--1 font-medium ${service.accentColor} group-hover:translate-x-1 transition-transform`}>
                            {expandedCard === index ? 'Hide details' : 'See deliverables'}
                          </span>
                          <motion.div
                            animate={{ rotate: expandedCard === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className={`w-4 h-4 ${service.accentColor}`} />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {expandedCard === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 space-y-4 pt-4 border-t border-gray-700/50">
                                <p className="text-step--1 text-gray-300 leading-relaxed">
                                  {service.description}
                                </p>
                                
                                {/* Micro-case story */}
                                <div className={`p-3 rounded-lg ${service.bgColor} border-l-4 border-${service.accentColor.replace('text-', '')}/30`}>
                                  <div className="flex items-center space-x-2 mb-2">
                                    <TrendingUp className={`w-4 h-4 ${service.accentColor}`} />
                                    <span className="text-step--1 font-medium text-white">Success Story</span>
                                  </div>
                                  <p className="text-step--1 text-gray-300 italic">
                                    "For {service.microCase.client} we achieved {service.microCase.metric} {service.microCase.metricLabel} in {service.microCase.timeframe}"
                                  </p>
                                </div>
                                
                                <div>
                                  <h4 className="text-step--1 font-medium text-white mb-2">Key Deliverables:</h4>
                                  <ul className="space-y-1">
                                    {service.deliverables.map((deliverable, deliverableIndex) => (
                                      <li key={deliverableIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                                        <CheckCircle className="w-3 h-3 text-status-success" />
                                        <span>{deliverable}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <Link href={service.link}>
                                  <Button variant="primary" size="sm" className="w-full group">
                                    View full service
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </Button>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
