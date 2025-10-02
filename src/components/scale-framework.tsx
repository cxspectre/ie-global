'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const scaleSteps = [
  {
    id: 'scope',
    letter: 'S',
    title: 'Scope',
    description: 'Define targets and constraints.',
    deliverables: [
      'KPI tree',
      'Audience segments', 
      'Tech audit',
      'Risk log',
      'Budget guardrails'
    ],
    color: 'from-brand to-brand-700'
  },
  {
    id: 'concept',
    letter: 'C',
    title: 'Concept',
    description: 'Prototype the winning path.',
    deliverables: [
      'UX wireframes',
      'Design tokens',
      'Data model',
      'Test plan'
    ],
    color: 'from-brand-accent to-cyan-600'
  },
  {
    id: 'assemble',
    letter: 'A',
    title: 'Assemble',
    description: 'Build the system right.',
    deliverables: [
      'CI/CD',
      'Component library',
      'API layer',
      'Content model',
      'Security baseline'
    ],
    color: 'from-status-success to-green-600'
  },
  {
    id: 'launch',
    letter: 'L',
    title: 'Launch',
    description: 'Go live with confidence.',
    deliverables: [
      'Perf hardening',
      'Accessibility fixes',
      'Analytics schema',
      'Runbook',
      'Rollback'
    ],
    color: 'from-status-warning to-yellow-600'
  },
  {
    id: 'enhance',
    letter: 'E',
    title: 'Enhance',
    description: 'Optimize continuously.',
    deliverables: [
      'A/B backlog',
      'Quarterly perf reports',
      'SEO sprints',
      'Feature roadmap'
    ],
    color: 'from-purple-500 to-purple-700'
  }
];

export function ScaleFramework() {
  const [expandedStep, setExpandedStep] = React.useState<string | null>(null);

  const toggleStep = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <section className="py-20 lg:py-32 bg-bg-900/50">
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
            IE Global Framework
          </h2>
          <p className="text-step-1 text-gray-400 max-w-3xl mx-auto mb-8">
            Our proven SCALE methodology ensures every project delivers exceptional results, 
            from initial scope definition to continuous optimization.
          </p>
          <div className="inline-flex items-center space-x-2 bg-brand/10 border border-brand/20 rounded-full px-6 py-3">
            <span className="text-step-2 font-bold text-brand">SCALE</span>
            <span className="text-step-0 text-gray-300">Framework</span>
          </div>
        </motion.div>

        {/* SCALE Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand-accent via-status-success via-status-warning to-purple-500 hidden lg:block" />

          <div className="space-y-8">
            {scaleSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${step.color} rounded-full z-10 hidden lg:block`} />

                <div className="lg:ml-20">
                  <Card
                    variant="glass"
                    interactive
                    className="cursor-pointer"
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xl`}>
                          {step.letter}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-step--1 font-medium text-brand">
                              {step.letter} — {step.title}
                            </span>
                          </div>
                          <h3 className="text-step-2 font-semibold text-white mb-2">
                            {step.title}
                          </h3>
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
                          Deliverables:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <motion.li
                              key={deliverableIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ 
                                opacity: expandedStep === step.id ? 1 : 0,
                                x: expandedStep === step.id ? 0 : -10
                              }}
                              transition={{ 
                                duration: 0.2, 
                                delay: deliverableIndex * 0.05 
                              }}
                              className="flex items-center space-x-2 text-step--1 text-gray-400"
                            >
                              <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                              <span>{deliverable}</span>
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
          <Button variant="primary" size="lg" className="group">
            <Download className="mr-2 w-4 h-4" />
            Request the SCALE playbook (PDF)
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
