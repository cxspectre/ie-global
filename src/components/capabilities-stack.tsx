'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Code, FileText, Cloud, Settings, Shield } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const capabilities = [
  {
    icon: Code,
    title: 'Dev',
    technologies: ['Next.js', 'React', 'TypeScript', 'iOS', 'RN'],
    color: 'from-brand to-brand-700'
  },
  {
    icon: FileText,
    title: 'Content',
    technologies: ['Sanity', 'Contentlayer', 'MDX'],
    color: 'from-brand-accent to-cyan-600'
  },
  {
    icon: Cloud,
    title: 'Cloud',
    technologies: ['Vercel', 'Azure', 'Cloudflare'],
    color: 'from-status-success to-green-600'
  },
  {
    icon: Settings,
    title: 'Ops',
    technologies: ['GitHub Actions', 'Playwright', 'Posthog'],
    color: 'from-status-warning to-yellow-600'
  },
  {
    icon: Shield,
    title: 'Security',
    technologies: ['SSO', 'CSP', '2FA', 'DPA templates'],
    color: 'from-purple-500 to-purple-700'
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
              <Card variant="glass" className="h-full text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-step-1 font-semibold text-white mb-4">
                    {capability.title}
                  </h3>
                  <div className="space-y-2">
                    {capability.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-step--1 text-gray-400 bg-bg-800 rounded px-2 py-1"
                      >
                        {tech}
                      </div>
                    ))}
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
