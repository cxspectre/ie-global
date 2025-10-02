'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllServices } from '@/lib/data/services';

const serviceHighlights = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second load times with edge rendering and optimized performance',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with WCAG AA compliance and data protection',
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: 'Mobile-first design that converts visitors into customers',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Measurable improvements in conversion rates and business metrics',
  },
];

export function ServicesPageContent() {
  const services = getAllServices();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-step-5 font-display font-bold text-white mb-6">
              AI-Driven Digital Solutions That Actually Work
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              We don't just build websites and apps—we craft digital experiences that drive real business results. 
              Our AI-enhanced development process delivers measurable improvements in performance, conversions, and user satisfaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-step-0 text-gray-300">
              {['AI-driven', 'Performance-focused', 'Accessibility-compliant', 'Scalable'].map((tag) => (
                <span key={tag} className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Why Choose Our AI-Enhanced Approach?
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge AI tools and methodologies to deliver solutions that are faster, 
              more accessible, and more effective than traditional development approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <highlight.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-step-0 text-gray-400">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              From custom web applications to mobile apps and enterprise solutions, 
              we deliver comprehensive digital experiences that drive business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="glass" interactive className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-accent rounded-lg flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">
                        {service.title.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-step-2">{service.title}</CardTitle>
                    <CardDescription className="text-step-0">
                      {service.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-step--1 font-medium text-white mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                            <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/services/${service.slug}`}>
                      <Button variant="primary" size="sm" className="w-full group">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Our AI-Enhanced 4D Process
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We've refined our development process with AI tools and automation to deliver 
              faster, more accurate, and more innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discover',
                description: 'AI-powered analysis of your business goals, user behavior, and competitive landscape',
                ai: 'Machine learning insights'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Intelligent design systems that adapt to user preferences and accessibility needs',
                ai: 'Automated accessibility testing'
              },
              {
                step: '03',
                title: 'Deliver',
                description: 'Code generation and optimization using AI-assisted development tools',
                ai: 'Smart performance optimization'
              },
              {
                step: '04',
                title: 'Drive',
                description: 'Continuous improvement through AI-driven analytics and automated testing',
                ai: 'Predictive performance monitoring'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-step-2">{phase.step}</span>
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-step-0 text-gray-400 mb-4">
                      {phase.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 rounded-full px-3 py-1">
                      <span className="text-step--1 font-medium text-brand">
                        {phase.ai}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand/10 to-brand-accent/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss how our AI-enhanced development process can deliver measurable 
              improvements for your business. Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Get a free consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg">
                View our work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
