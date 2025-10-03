'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, Cloud, Settings, Shield } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const capabilities = [
  {
    icon: Code,
    title: 'Development',
    technologies: ['Next.js', 'React', 'TypeScript', 'iOS', 'RN'],
    color: 'from-brand to-brand-700',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10',
    whyItMatters: 'Modern frameworks ensure fast, maintainable code that scales with your business needs.',
    benefits: ['Edge rendering', 'Type safety', 'Cross-platform', 'Hot reload']
  },
  {
    icon: FileText,
    title: 'Content',
    technologies: ['Sanity', 'Contentlayer', 'MDX'],
    color: 'from-brand-accent to-cyan-600',
    accentColor: 'text-brand-accent',
    bgColor: 'bg-brand-accent/10',
    whyItMatters: 'Headless CMS solutions provide flexibility and performance for content-heavy applications.',
    benefits: ['Real-time editing', 'API-first', 'Version control', 'SEO optimized']
  },
  {
    icon: Cloud,
    title: 'Cloud & Hosting',
    technologies: ['Vercel', 'Azure', 'Cloudflare'],
    color: 'from-status-success to-green-600',
    accentColor: 'text-status-success',
    bgColor: 'bg-status-success/10',
    whyItMatters: 'Global edge networks deliver sub-second load times and 99.9% uptime guarantees.',
    benefits: ['Global CDN', 'Auto-scaling', 'DDoS protection', 'Edge functions']
  },
  {
    icon: Settings,
    title: 'Operations',
    technologies: ['GitHub Actions', 'Playwright', 'Posthog'],
    color: 'from-status-warning to-yellow-600',
    accentColor: 'text-status-warning',
    bgColor: 'bg-status-warning/10',
    whyItMatters: 'Automated workflows reduce deployment time by 75% and eliminate human errors.',
    benefits: ['CI/CD pipelines', 'Automated testing', 'Performance monitoring', 'Error tracking']
  },
  {
    icon: Shield,
    title: 'Security',
    technologies: ['SSO', 'CSP', '2FA', 'DPA templates'],
    color: 'from-secondary-violet to-purple-600',
    accentColor: 'text-secondary-violet',
    bgColor: 'bg-secondary-violet/10',
    whyItMatters: 'Enterprise-grade security ensures compliance and protects your data and users.',
    benefits: ['GDPR compliant', 'Zero-trust', 'Audit trails', 'Data encryption']
  }
];

export function CapabilitiesStack() {
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
            Capabilities & Stack
          </h2>
          <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
            Modern tools and technologies that power our high-performance solutions 
            and ensure reliable, secure, and scalable delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="glass" className="h-full group hover:border-brand/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <capability.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-step-1 font-semibold text-white group-hover:${capability.accentColor} transition-colors`}>
                      {capability.title}
                    </h3>
                  </div>
                  
                  <p className="text-step--1 text-gray-300 mb-4 leading-relaxed">
                    {capability.whyItMatters}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-step--1 font-medium text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {capability.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-step--1 text-gray-400 bg-bg-800 rounded-full px-2 py-1 border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-step--1 font-medium text-white mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                          <div className={`w-1.5 h-1.5 ${capability.bgColor} rounded-full`} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
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
