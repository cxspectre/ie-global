import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar, MessageSquare, Zap } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Consultation',
  description: 'Ready to transform your digital presence? Get in touch with IE Global for a free consultation on custom web development, mobile apps, and M365 solutions.',
  openGraph: {
    title: 'Contact Us - IE Global',
    description: 'Get a free consultation and discover how our AI-enhanced development process can transform your business.',
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    details: ['sales@ie-global.example', 'support@ie-global.example'],
    action: 'mailto:sales@ie-global.example'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team directly',
    details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM EST'],
    action: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in the United States',
    details: ['Remote-first company', 'Serving clients globally'],
    action: null
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'We respond quickly',
    details: ['Within 24 hours', 'Usually within 4 hours'],
    action: null
  },
];

const consultationBenefits = [
  {
    icon: Zap,
    title: 'Free Project Assessment',
    description: 'We\'ll analyze your current digital presence and identify opportunities for improvement.'
  },
  {
    icon: MessageSquare,
    title: 'Strategy Discussion',
    description: 'Discuss your goals, challenges, and how our AI-enhanced approach can help.'
  },
  {
    icon: Calendar,
    title: 'Timeline & Budget',
    description: 'Get a realistic timeline and budget estimate for your project.'
  }
];

export default function ContactPage() {
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
              Let's Create Something Amazing Together
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              Ready to transform your digital presence? We're here to help you build custom web applications, 
              mobile apps, and M365 solutions that deliver real business results. Get a free consultation 
              and discover how our AI-enhanced development process can accelerate your success.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-step-0 text-gray-300">
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">Free</div>
                <div>Initial consultation</div>
              </div>
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">24h</div>
                <div>Response time</div>
              </div>
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">100%</div>
                <div>Client satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              What You Get in Your Free Consultation
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              Our free consultation isn't just a sales pitch—it's a valuable opportunity to get 
              expert insights into your digital strategy and discover new possibilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {consultationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-step-0 text-gray-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-step-3 font-display font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-step-0 text-gray-400 mb-8">
                  We're here to help you succeed. Reach out through any of these channels 
                  and we'll get back to you promptly. No matter how you contact us, 
                  you'll get the same level of attention and expertise.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card 
                      variant="glass" 
                      interactive={!!info.action}
                      className={info.action ? 'cursor-pointer hover:border-brand/40' : ''}
                      onClick={info.action ? () => window.open(info.action) : undefined}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-brand" />
                          </div>
                          <div>
                            <h3 className="text-step-1 font-semibold text-white mb-1">
                              {info.title}
                            </h3>
                            <p className="text-step--1 text-gray-400 mb-2">
                              {info.description}
                            </p>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-step-0 text-gray-300">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="text-step-1 font-semibold text-white">
                      What Happens Next?
                    </CardTitle>
                    <CardDescription className="text-step-0">
                      Here's our process after you reach out:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Initial Response:</strong> We'll get back to you within 24 hours (usually within 4 hours)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Discovery Call:</strong> We'll schedule a 30-45 minute call to understand your needs and goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Custom Proposal:</strong> We'll provide a detailed proposal with timeline, budget, and deliverables
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">4</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Project Kickoff:</strong> Once approved, we'll start building your digital solution
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
