'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const steps = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'We analyze your business goals, target audience, and technical requirements to create a comprehensive strategy.',
    details: [
      'Business goal analysis',
      'User research & personas',
      'Technical audit',
      'Competitive analysis',
      'Project roadmap creation'
    ],
    icon: '🔍',
    color: 'from-brand to-brand-700'
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Our design team creates intuitive, accessible interfaces that align with your brand and drive conversions.',
    details: [
      'Wireframing & prototyping',
      'UI/UX design system',
      'Accessibility compliance',
      'Brand integration',
      'User testing & iteration'
    ],
    icon: '🎨',
    color: 'from-brand-accent to-cyan-600'
  },
  {
    id: 'deliver',
    title: 'Deliver',
    description: 'We build your solution using cutting-edge technology, ensuring performance, security, and scalability.',
    details: [
      'Frontend development',
      'Backend architecture',
      'Database optimization',
      'Performance tuning',
      'Security implementation'
    ],
    icon: '⚡',
    color: 'from-status-success to-green-600'
  },
  {
    id: 'drive',
    title: 'Drive',
    description: 'We monitor performance, analyze data, and continuously optimize to maximize your ROI and user satisfaction.',
    details: [
      'Performance monitoring',
      'Analytics & reporting',
      'A/B testing',
      'Continuous optimization',
      'Ongoing support'
    ],
    icon: '📈',
    color: 'from-status-warning to-yellow-600'
  }
];

export function Timeline() {
  const [expandedStep, setExpandedStep] = React.useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-step-4 font-display font-bold text-white mb-4">
            Our 4D Framework
          </h2>
          <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
            A proven methodology that ensures every project delivers exceptional results, 
            from initial discovery to ongoing optimization.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand-accent via-status-success to-status-warning hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-bg-900 border-4 border-brand rounded-full z-10 hidden lg:block" />

                <div className="lg:ml-20">
                  <Card
                    variant="glass"
                    interactive
                    className="cursor-pointer"
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-step--1 font-medium text-brand">
                              Step {index + 1}
                            </span>
                            <h3 className="text-step-2 font-semibold text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-step-0 text-gray-300 mb-4">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-4"
                        aria-label={`${expandedStep === step.id ? 'Collapse' : 'Expand'} ${step.title} details`}
                      >
                        {expandedStep === step.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedStep === step.id ? 'auto' : 0,
                        opacity: expandedStep === step.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-400/20">
                        <h4 className="text-step-0 font-medium text-white mb-3">
                          What we deliver:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ 
                                opacity: expandedStep === step.id ? 1 : 0,
                                x: expandedStep === step.id ? 0 : -10
                              }}
                              transition={{ 
                                duration: 0.2, 
                                delay: detailIndex * 0.05 
                              }}
                              className="flex items-center space-x-2 text-step--1 text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="primary" size="lg">
            Start your project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

