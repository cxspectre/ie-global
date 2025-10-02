'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, TrendingUp, Users, Clock } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllCaseStudies } from '@/lib/data/case-studies';

export function WorkPageContent() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-step-5 font-display font-bold text-white mb-6">
              Real Results for Real Businesses
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              Our AI-enhanced development approach delivers measurable improvements in performance, 
              conversions, and user satisfaction. See how we've helped businesses transform their digital presence.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-step-0 text-gray-300">
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">+40%</div>
                <div>Average conversion lift</div>
              </div>
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">&lt;1s</div>
                <div>Average load time</div>
              </div>
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">99.9%</div>
                <div>Uptime guarantee</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Each project follows our proven methodology: Problem → Approach → Outcome → Metrics. 
              We measure success by the real business impact we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glass" interactive className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-accent rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {study.client.charAt(0)}
                        </span>
                      </div>
                      <span className="text-step--1 text-gray-400">{study.year}</span>
                    </div>
                    <CardTitle className="text-step-2">{study.title}</CardTitle>
                    <CardDescription className="text-step-0">
                      {study.client} • {study.sector}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-brand/10 border border-brand/20 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-brand" />
                        <span className="text-step--1 font-medium text-brand">Key Result</span>
                      </div>
                      <p className="text-step-0 text-white font-semibold">
                        {study.metrics?.[0]?.value || 'Significant improvement'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-step--1 font-medium text-white mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tech?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-bg-800 text-step--1 text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={`/work/${study.slug}`}>
                      <Button variant="primary" size="sm" className="w-full group">
                        View case study
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              How We Deliver Results
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Our systematic approach ensures every project delivers measurable business impact. 
              We don't just build—we optimize for performance and results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Problem Analysis',
                description: 'Deep dive into business challenges and user pain points',
                icon: Users
              },
              {
                step: '02',
                title: 'Strategic Approach',
                description: 'AI-enhanced solution design and technical architecture',
                icon: TrendingUp
              },
              {
                step: '03',
                title: 'Rapid Development',
                description: 'Agile development with continuous testing and optimization',
                icon: Clock
              },
              {
                step: '04',
                title: 'Measurable Results',
                description: 'Performance monitoring and continuous improvement',
                icon: ExternalLink
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-step-2">{phase.step}</span>
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-step-0 text-gray-400">
                      {phase.description}
                    </p>
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss your project and see how our AI-enhanced development approach 
              can deliver measurable improvements for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Start your project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg">
                Schedule a consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
