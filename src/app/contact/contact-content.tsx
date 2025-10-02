'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get a response within 24 hours',
    value: 'hello@ie-global.example',
    action: 'mailto:hello@ie-global.example'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Based in Brussels, serving globally',
    value: 'Brussels, Belgium',
    action: null
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday to Friday',
    value: '9:00 AM - 6:00 PM CET',
    action: null
  },
  {
    icon: MessageCircle,
    title: 'Quick Chat',
    description: 'Schedule a 20-minute call',
    value: 'Book a consultation',
    action: '#'
  }
];

const benefits = [
  'Free project consultation and estimate',
  'AI-enhanced development approach',
  'Sub-second performance guarantee',
  '24/7 support and monitoring',
  'Measurable business results'
];

export function ContactPageContent() {
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
              Ready to Transform Your Digital Presence?
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss your project and see how our AI-enhanced development process 
              can deliver measurable improvements for your business. Get a free consultation 
              and discover the possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-step-0 text-gray-300">
              {benefits.map((benefit) => (
                <span key={benefit} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand" />
                  <span>{benefit}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-step-3">Start Your Project</CardTitle>
                  <CardDescription className="text-step-0">
                    Tell us about your project and we'll provide a detailed proposal within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-step-3 font-display font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-step-1 text-gray-400 mb-8">
                  We're here to help you succeed. Whether you have a specific project in mind 
                  or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card variant="glass" className="hover:border-brand/40 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-brand" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-step-1 font-semibold text-white mb-1">
                              {info.title}
                            </h3>
                            <p className="text-step-0 text-gray-400 mb-2">
                              {info.description}
                            </p>
                            {info.action ? (
                              <a
                                href={info.action}
                                className="text-step-0 text-brand hover:text-brand-accent transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-step-0 text-gray-300">
                                {info.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Here are some common questions we receive. Don't see your question? 
              Feel free to reach out directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Most projects are completed within 4-8 weeks, depending on complexity. We provide detailed timelines during the consultation phase.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer comprehensive hosting and care plans with 24/7 monitoring, regular updates, and performance optimization.'
              },
              {
                question: 'What makes your approach different?',
                answer: 'We use AI-enhanced development tools and focus on measurable business results, not just technical implementation.'
              },
              {
                question: 'Do you work with small businesses?',
                answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise clients. Our solutions scale with your needs.'
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card variant="glass">
                  <CardContent className="p-6">
                    <h3 className="text-step-1 font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-step-0 text-gray-400">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
