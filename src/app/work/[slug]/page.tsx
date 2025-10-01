import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote, CheckCircle } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/data/case-studies';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug(params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.summary,
      images: [caseStudy.heroImage],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/work">
          <Button variant="ghost" size="sm" className="group">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to work
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center space-x-2 text-step--1 text-brand mb-4">
              <span>{caseStudy.sector}</span>
              <span>•</span>
              <span>{caseStudy.year}</span>
            </div>
            <h1 className="text-step-5 font-display font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              {caseStudy.summary}
            </p>
            
            {/* Hero Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-2xl flex items-center justify-center mb-12">
              <span className="text-6xl">📱</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
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
              <p className="text-step-0 text-gray-300 leading-body">
                {caseStudy.problem}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-step-3 font-display font-bold text-white mb-6">
                Our Approach
              </h2>
              <p className="text-step-0 text-gray-300 leading-body">
                {caseStudy.approach}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-step-3 font-display font-bold text-white mb-12 text-center">
              Results
            </h2>
            
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {caseStudy.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card variant="glass" className="text-center">
                    <CardContent className="p-6">
                      <div className="text-step-3 font-bold text-brand mb-2">
                        {metric.value}
                      </div>
                      <div className="text-step--1 text-gray-400 mb-1">
                        {metric.label}
                      </div>
                      <div className="text-step--1 text-status-success font-medium">
                        {metric.improvement}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Results List */}
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                  <span className="text-step-0 text-gray-300">{result}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-step-3 font-display font-bold text-white mb-8">
              Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudy.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 bg-bg-800 text-step-0 text-gray-300 rounded-lg border border-gray-400/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card variant="glass" className="text-center">
              <CardContent className="p-12">
                <Quote className="w-12 h-12 text-brand mx-auto mb-6" />
                <blockquote className="text-step-1 text-gray-300 mb-8 leading-body">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {caseStudy.testimonial.authorName.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="text-step-0 font-medium text-white">
                      {caseStudy.testimonial.authorName}
                    </div>
                    <div className="text-step--1 text-gray-400">
                      {caseStudy.testimonial.authorRole}, {caseStudy.testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand/10 to-brand-accent/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss how we can help transform your business with custom digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start your project
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

