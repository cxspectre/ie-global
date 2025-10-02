import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllServices } from '@/lib/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive digital solutions including custom websites, mobile apps, M365 solutions, cloud hosting, and digital marketing.',
};

export default function ServicesPage() {
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
              Digital Solutions That Drive Results
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              From custom websites to mobile apps, we deliver comprehensive digital solutions 
              that enhance your business performance and user experience.
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

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
              Get a free consultation and discover how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get a free consultation
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

