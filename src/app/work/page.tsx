import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp, Clock, Users, Zap } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllCaseStudies } from '@/lib/data/case-studies';

export const metadata: Metadata = {
  title: 'Our Work - Case Studies & Portfolio',
  description: 'Explore our portfolio of successful projects including e-commerce platforms, mobile apps, and custom web solutions that deliver measurable business results.',
  openGraph: {
    title: 'Our Work - IE Global',
    description: 'Case studies showcasing our AI-driven development approach and measurable business results.',
  },
};

const portfolioStats = [
  {
    icon: TrendingUp,
    value: '45%',
    label: 'Average conversion increase',
    description: 'Across all client projects'
  },
  {
    icon: Zap,
    value: '<1s',
    label: 'Average load time',
    description: 'Sub-second performance'
  },
  {
    icon: Users,
    value: '99.9%',
    label: 'Client satisfaction',
    description: 'Based on post-launch surveys'
  },
  {
    icon: Clock,
    value: '4-8 weeks',
    label: 'Average delivery time',
    description: 'From concept to launch'
  }
];

export default function WorkPage() {
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-step-5 font-display font-bold text-white mb-6">
              Our Work: Real Results, Real Impact
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              We don't just build digital solutions—we create experiences that drive measurable business growth. 
              Our AI-enhanced development approach consistently delivers exceptional results across industries and use cases.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-step-0 text-gray-300">
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">45%</div>
                <div>Avg. conversion increase</div>
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

      {/* Portfolio Stats */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Proven Track Record
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Our AI-driven development approach consistently delivers exceptional results 
              that exceed client expectations and drive real business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glass" className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-brand" />
                    </div>
                    <div className="text-step-4 font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-step-1 font-medium text-gray-300 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-step--1 text-gray-400">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Dive deep into our most successful projects and see how our AI-enhanced 
              development process delivers measurable business results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <Card variant="glass" interactive className="h-full">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-4xl">📱</span>
                    </div>
                    <div className="flex items-center space-x-2 text-step--1 text-brand mb-2">
                      <span>{caseStudy.sector}</span>
                      <span>•</span>
                      <span>{caseStudy.year}</span>
                    </div>
                    <CardTitle className="text-step-2">{caseStudy.title}</CardTitle>
                    <CardDescription className="text-step-0">
                      {caseStudy.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Key Results */}
                    <div>
                      <h4 className="text-step--1 font-medium text-white mb-3">
                        Key Results:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {caseStudy.metrics.slice(0, 4).map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center p-3 bg-bg-800 rounded-lg">
                            <div className="text-step-1 font-bold text-brand">{metric.value}</div>
                            <div className="text-step--1 text-gray-400">{metric.label}</div>
                            <div className="text-step--1 text-status-success">{metric.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-step--1 font-medium text-white mb-2">
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-bg-800 text-step--1 text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {caseStudy.tech.length > 4 && (
                          <span className="px-2 py-1 bg-bg-800 text-step--1 text-gray-400 rounded">
                            +{caseStudy.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <Link href={`/work/${caseStudy.slug}`}>
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              How We Deliver Results
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Our AI-enhanced 4D framework ensures every project delivers exceptional results 
              through systematic discovery, intelligent design, efficient delivery, and continuous optimization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discover',
                description: 'AI-powered analysis of business goals, user behavior, and market opportunities',
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
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss your project and see how our AI-enhanced development process 
              can deliver measurable improvements for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Start your project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
