'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, TrendingUp, Clock, Users, Zap } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function TechCorpPageContent() {
  return (
    <div className="pt-20">
      {/* Back Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <Link href="/work">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to case studies
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-brand to-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <h1 className="text-step-4 font-display font-bold text-white">
                  TechCorp E-commerce Platform
                </h1>
                <p className="text-step-0 text-gray-400">Technology • 2024</p>
              </div>
            </div>
            
            <div className="bg-brand/10 border border-brand/20 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-brand" />
                <span className="text-step-0 font-medium text-brand">Key Result</span>
              </div>
              <p className="text-step-2 text-white font-bold">
                +31% signup rate in 6 weeks
              </p>
            </div>

            <p className="text-step-1 text-gray-400 leading-body">
              TechCorp needed a high-performance e-commerce platform that could handle their growing 
              customer base while maintaining sub-second load times. Through our AI-enhanced development 
              process, we delivered a solution that not only met their performance requirements but 
              significantly improved their conversion rates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-step-3 font-display font-bold text-white mb-6">
                The Challenge
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-status-error rounded-full mt-2" />
                  <p className="text-step-0 text-gray-400">
                    Slow page load times (3.2s average) were causing high bounce rates
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-status-error rounded-full mt-2" />
                  <p className="text-step-0 text-gray-400">
                    Poor mobile experience with 40% of users abandoning on mobile devices
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-status-error rounded-full mt-2" />
                  <p className="text-step-0 text-gray-400">
                    Complex checkout process with high cart abandonment rates
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-status-error rounded-full mt-2" />
                  <p className="text-step-0 text-gray-400">
                    Limited scalability for their growing product catalog
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-step-2">Before Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Page Load Time</span>
                    <span className="text-step-0 text-status-error font-semibold">3.2s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Bounce Rate</span>
                    <span className="text-step-0 text-status-error font-semibold">68%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Signup Rate</span>
                    <span className="text-step-0 text-status-error font-semibold">2.1%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Mobile Conversion</span>
                    <span className="text-step-0 text-status-error font-semibold">1.2%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Our AI-Enhanced Solution
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We implemented a comprehensive performance optimization strategy using cutting-edge 
              technologies and AI-driven insights to transform their digital experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Performance Optimization',
                description: 'Implemented Next.js with edge rendering, optimized images, and smart caching strategies',
                results: ['LCP: 0.8s', 'INP: 120ms', 'CLS: 0.01']
              },
              {
                icon: Users,
                title: 'UX Enhancement',
                description: 'Redesigned checkout flow with AI-powered form optimization and mobile-first approach',
                results: ['Streamlined checkout', 'Mobile optimization', 'Accessibility compliance']
              },
              {
                icon: Clock,
                title: 'Scalable Architecture',
                description: 'Built on Vercel Edge with headless CMS integration for content management',
                results: ['Global CDN', 'Auto-scaling', '99.9% uptime']
              }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-brand" />
                    </div>
                    <CardTitle className="text-step-2">{solution.title}</CardTitle>
                    <CardDescription className="text-step-0">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {solution.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-step-3 font-display font-bold text-white mb-6">
                Measurable Results
              </h2>
              <p className="text-step-1 text-gray-400 mb-8">
                Our AI-enhanced development approach delivered significant improvements across 
                all key performance indicators within just 6 weeks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-status-success rounded-full" />
                  <p className="text-step-0 text-gray-400">
                    <span className="text-status-success font-semibold">+31%</span> increase in signup rate
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-status-success rounded-full" />
                  <p className="text-step-0 text-gray-400">
                    <span className="text-status-success font-semibold">-75%</span> reduction in page load time
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-status-success rounded-full" />
                  <p className="text-step-0 text-gray-400">
                    <span className="text-status-success font-semibold">+45%</span> improvement in mobile conversions
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-status-success rounded-full" />
                  <p className="text-step-0 text-gray-400">
                    <span className="text-status-success font-semibold">-52%</span> decrease in bounce rate
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-step-2">After Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Page Load Time</span>
                    <span className="text-step-0 text-status-success font-semibold">0.8s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Bounce Rate</span>
                    <span className="text-step-0 text-status-success font-semibold">32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Signup Rate</span>
                    <span className="text-step-0 text-status-success font-semibold">2.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-step-0 text-gray-400">Mobile Conversion</span>
                    <span className="text-step-0 text-status-success font-semibold">1.7%</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Built with modern, performant technologies that ensure scalability and maintainability.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'Sanity CMS', 'Stripe', 'Google Analytics'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.05 }}
                className="px-4 py-2 bg-bg-800 border border-gray-400/20 rounded-lg text-step-0 text-gray-300 hover:border-brand/40 transition-colors"
              >
                {tech}
              </motion.span>
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
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss how our AI-enhanced development approach can transform your digital presence 
              and deliver measurable business improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Start your project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg">
                View more case studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
