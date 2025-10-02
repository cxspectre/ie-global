import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with IE Global for custom web development, mobile apps, M365 solutions, and digital marketing services.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us an email anytime',
    details: ['sales@ie-global.example', 'support@ie-global.example'],
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us during business hours',
    details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM EST'],
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in the United States',
    details: ['Remote-first company', 'Serving clients globally'],
  },
  {
    icon: Clock,
    title: 'Response Time',
    description: 'We respond quickly',
    details: ['Within 24 hours', 'Usually within 4 hours'],
  },
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
              Let's Build Something Amazing Together
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              Ready to transform your digital presence? Get in touch and let's discuss 
              how we can help you achieve your business goals.
            </p>
          </motion.div>
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
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-step-3 font-display font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-step-0 text-gray-400 mb-8">
                  We're here to help you succeed. Reach out through any of these channels 
                  and we'll get back to you promptly.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card variant="glass">
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
                      What to Expect
                    </CardTitle>
                    <CardDescription className="text-step-0">
                      Here's what happens after you reach out:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">1</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Initial Response:</strong> We'll get back to you within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">2</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Discovery Call:</strong> We'll schedule a call to understand your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-step--1 font-bold">3</span>
                      </div>
                      <div>
                        <p className="text-step-0 text-gray-300">
                          <strong>Proposal:</strong> We'll provide a detailed proposal and timeline
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

