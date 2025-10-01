import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllCaseStudies } from '@/lib/data/case-studies';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Explore our portfolio of successful projects including e-commerce platforms, mobile apps, and custom web solutions.',
};

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
              Our Work
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              Discover how we've helped businesses transform their digital presence 
              and achieve measurable results through innovative solutions.
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

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand/10 to-brand-accent/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Start a project
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

