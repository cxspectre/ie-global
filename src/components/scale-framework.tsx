'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Wrench, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  Download,
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const scaleSteps = [
  {
    letter: 'S',
    name: 'Scope',
    icon: Search,
    color: 'from-brand to-brand-700',
    accentColor: 'text-brand',
    bgColor: 'bg-brand/10',
    description: 'Define targets and constraints',
    deliverables: [
      'KPI tree & success metrics',
      'Audience segments & personas',
      'Technical audit & assessment',
      'Risk log & mitigation plan',
      'Budget guardrails & timeline'
    ],
    duration: '1-2 weeks',
    team: 'Strategy + UX'
  },
  {
    letter: 'C',
    name: 'Concept',
    icon: Lightbulb,
    color: 'from-secondary-amber to-yellow-600',
    accentColor: 'text-secondary-amber',
    bgColor: 'bg-secondary-amber/10',
    description: 'Prototype the winning path',
    deliverables: [
      'UX wireframes & user flows',
      'Design system & tokens',
      'Data model & architecture',
      'Testing strategy & plan',
      'Content strategy & structure'
    ],
    duration: '2-3 weeks',
    team: 'Design + Engineering'
  },
  {
    letter: 'A',
    name: 'Assemble',
    icon: Wrench,
    color: 'from-secondary-emerald to-green-600',
    accentColor: 'text-secondary-emerald',
    bgColor: 'bg-secondary-emerald/10',
    description: 'Build the system right',
    deliverables: [
      'CI/CD pipeline & automation',
      'Component library & patterns',
      'API layer & integrations',
      'Content model & CMS setup',
      'Security baseline & compliance'
    ],
    duration: '4-8 weeks',
    team: 'Engineering + DevOps'
  },
  {
    letter: 'L',
    name: 'Launch',
    icon: Rocket,
    color: 'from-secondary-coral to-pink-600',
    accentColor: 'text-secondary-coral',
    bgColor: 'bg-secondary-coral/10',
    description: 'Go live with confidence',
    deliverables: [
      'Performance optimization',
      'Accessibility compliance',
      'Analytics & tracking setup',
      'Launch runbook & procedures',
      'Rollback plan & monitoring'
    ],
    duration: '1-2 weeks',
    team: 'All hands'
  },
  {
    letter: 'E',
    name: 'Enhance',
    icon: TrendingUp,
    color: 'from-secondary-violet to-purple-600',
    accentColor: 'text-secondary-violet',
    bgColor: 'bg-secondary-violet/10',
    description: 'Optimize continuously',
    deliverables: [
      'A/B testing backlog',
      'Performance monitoring',
      'SEO optimization sprints',
      'Feature roadmap & planning',
      'Quarterly business reviews'
    ],
    duration: 'Ongoing',
    team: 'Growth + Engineering'
  }
];

export function ScaleFramework() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-bg-950 via-bg-900 to-secondary-violet/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-secondary-amber/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-step-4 font-display font-bold text-white mb-4">
            The IE Global Framework
          </h2>
          <p className="text-step-1 text-gray-300 max-w-3xl mx-auto mb-8">
            Our proven SCALE methodology delivers results through systematic, 
            data-driven development that scales with your business.
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand/20 to-secondary-violet/20 rounded-full px-6 py-3 border border-brand/30">
            <Zap className="w-5 h-5 text-brand" />
            <span className="text-step-0 font-semibold text-white">SCALE</span>
            <span className="text-step--1 text-gray-300">Methodology</span>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Header */}
          <div className="relative mb-12">
            <div className="flex justify-between items-center">
              {scaleSteps.map((step, index) => (
                <motion.div
                  key={step.letter}
                  className="flex flex-col items-center cursor-pointer group"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 relative ${
                      activeStep === index 
                        ? `bg-gradient-to-r ${step.color}` 
                        : 'bg-bg-800 border-2 border-gray-400/30'
                    }`}
                    animate={{
                      scale: activeStep === index ? 1.1 : 1,
                      boxShadow: activeStep === index 
                        ? `0 0 30px ${step.accentColor.replace('text-', '')}40`
                        : '0 0 0px transparent'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className={`w-8 h-8 ${
                      activeStep === index ? 'text-white' : 'text-gray-400'
                    }`} />
                    
                    {/* Connection Line */}
                    {index < scaleSteps.length - 1 && (
                      <motion.div
                        className="absolute left-full top-1/2 w-16 h-0.5 bg-gradient-to-r from-gray-400/30 to-gray-400/10"
                        animate={{
                          background: activeStep >= index 
                            ? `linear-gradient(to right, ${step.accentColor.replace('text-', '')}, transparent)`
                            : 'linear-gradient(to right, rgb(156 163 175 / 0.3), rgb(156 163 175 / 0.1))'
                        }}
                      />
                    )}
                  </motion.div>
                  
                  <div className="text-center">
                    <div className={`text-step-1 font-bold ${
                      activeStep === index ? step.accentColor : 'text-gray-400'
                    }`}>
                      {step.letter}
                    </div>
                    <div className="text-step--1 text-gray-500 font-medium">
                      {step.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="glass" className="border-brand/20">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Step Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${scaleSteps[activeStep].color} flex items-center justify-center`}>
                          <scaleSteps[activeStep].icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-step-3 font-bold text-white">
                            {scaleSteps[activeStep].name}
                          </h3>
                          <p className="text-step-0 text-gray-300">
                            {scaleSteps[activeStep].description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-step--1 text-gray-400">
                            Duration: <span className="text-white font-medium">{scaleSteps[activeStep].duration}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-step--1 text-gray-400">
                            Team: <span className="text-white font-medium">{scaleSteps[activeStep].team}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-2">
                      <h4 className="text-step-1 font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-status-success mr-2" />
                        Key Deliverables
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {scaleSteps[activeStep].deliverables.map((deliverable, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-bg-800/50 hover:bg-bg-800/80 transition-colors"
                          >
                            <div className={`w-2 h-2 rounded-full ${scaleSteps[activeStep].bgColor}`} />
                            <span className="text-step--1 text-gray-300">{deliverable}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="primary" size="lg" className="group">
              <Download className="mr-2 w-5 h-5" />
              Request the SCALE playbook (PDF)
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-step--1 text-gray-400 mt-3">
              Complete methodology guide with templates, checklists, and best practices
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}