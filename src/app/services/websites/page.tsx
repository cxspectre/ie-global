import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Shield, Search, Smartphone, Globe } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Custom Website Development - High-Performance Web Solutions',
  description: 'Custom websites that load in <1s and convert 20-40% better. We build high-performance web applications using Next.js, React, and edge computing.',
  openGraph: {
    title: 'Custom Website Development - IE Global',
    description: 'High-performance websites that load in <1s and convert 20-40% better with AI-enhanced development.',
  },
};

const features = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Sub-second load times with edge rendering, optimized images, and smart caching strategies.',
    benefits: ['Edge-rendered pages', 'Optimized Core Web Vitals', 'Smart image compression', 'CDN distribution']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with SSL certificates, security headers, and regular vulnerability assessments.',
    benefits: ['SSL/TLS encryption', 'Security headers', 'Regular audits', 'GDPR compliance']
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO optimization with structured data, meta tags, and performance monitoring.',
    benefits: ['Structured data markup', 'Meta tag optimization', 'Sitemap generation', 'Analytics integration']
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive design that works perfectly on all devices with touch-optimized interactions.',
    benefits: ['Responsive layouts', 'Touch optimization', 'Progressive Web App', 'Offline functionality']
  },
  {
    icon: Globe,
    title: 'Global Performance',
    description: 'Worldwide content delivery with edge computing and intelligent routing.',
    benefits: ['Global CDN', 'Edge computing', 'Geographic optimization', 'Multi-language support']
  }
];

const process = [
  {
    phase: 'Discovery & Strategy',
    duration: '1-2 weeks',
    deliverables: [
      'Business goal analysis',
      'User research & personas',
      'Technical requirements audit',
      'Competitive analysis',
      'SEO strategy development'
    ]
  },
  {
    phase: 'Design & Prototyping',
    duration: '2-3 weeks',
    deliverables: [
      'Wireframing & user flows',
      'UI/UX design system',
      'Interactive prototypes',
      'Accessibility compliance review',
      'Client feedback integration'
    ]
  },
  {
    phase: 'Development & Testing',
    duration: '3-4 weeks',
    deliverables: [
      'Frontend development (Next.js/React)',
      'Backend API development',
      'Database optimization',
      'Performance testing & optimization',
      'Cross-browser compatibility testing'
    ]
  },
  {
    phase: 'Launch & Optimization',
    duration: '1 week',
    deliverables: [
      'Domain setup & SSL configuration',
      'Content migration & testing',
      'Performance monitoring setup',
      'Analytics & tracking implementation',
      'Launch support & training'
    ]
  }
];

const technologies = [
  'Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 
  'Sanity CMS', 'Stripe', 'Google Analytics', 'Search Console', 'Lighthouse'
];

export default function WebsitesPage() {
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
              Custom Websites That Load in &lt;1s and Convert 20-40% Better
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              We build high-performance web applications using cutting-edge technologies like Next.js, 
              React, and edge computing. Our AI-enhanced development process ensures your website 
              not only looks amazing but delivers measurable business results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-step-0 text-gray-300 mb-8">
              {['Sub-second load times', 'Mobile-first responsive', 'SEO optimized', 'WCAG AA compliant'].map((benefit) => (
                <span key={benefit} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>{benefit}</span>
                </span>
              ))}
            </div>
            <Button variant="primary" size="lg" className="group">
              Start your project
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Why Our Websites Outperform the Competition
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We don't just build websites—we craft digital experiences that drive conversions, 
              engage users, and deliver measurable business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-brand" />
                    </div>
                    <CardTitle className="text-step-2">{feature.title}</CardTitle>
                    <CardDescription className="text-step-0">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                          <span>{benefit}</span>
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

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We follow a proven 4-phase approach that ensures quality, performance, 
              and timely delivery of your custom website.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-step--1">{index + 1}</span>
                      </div>
                      <span className="text-step--1 text-brand font-medium">{phase.duration}</span>
                    </div>
                    <CardTitle className="text-step-1">{phase.phase}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-center space-x-2 text-step--1 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                          <span>{deliverable}</span>
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

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to ensure your website 
              is fast, secure, and future-proof.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Build Your High-Performance Website?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss your project requirements and create a custom website 
              that delivers exceptional performance and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Get a free consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg">
                View our portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
