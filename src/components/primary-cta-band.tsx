'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Calendar, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ctaSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  budget: z.enum(['under-10k', '10k-25k', '25k-50k', '50k-100k', 'over-100k']),
  goal: z.enum(['website', 'mobile-app', 'm365', 'hosting', 'consultation', 'other']),
});

type CTAFormData = z.infer<typeof ctaSchema>;

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
];

const goalOptions = [
  { value: 'website', label: 'Custom Website' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'm365', label: 'Microsoft 365 Solution' },
  { value: 'hosting', label: 'Hosting & DevOps' },
  { value: 'consultation', label: 'Strategy Consultation' },
  { value: 'other', label: 'Other' },
];

export function PrimaryCTABand() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState<Partial<CTAFormData>>({});
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CTAFormData>({
    resolver: zodResolver(ctaSchema),
  });

  const nextStep = () => {
    const currentFormData = watch();
    setFormData(currentFormData);
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const onSubmit = async (data: CTAFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Simulate form submission for static export
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thanks! We\'ll get back to you within 24 hours.' 
      });
      reset();
      setCurrentStep(1);
      setFormData({});
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-brand/10 to-brand-accent/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Start a project. Ship in weeks, not months.
            </h2>
            <p className="text-step-1 text-gray-400">
              Get a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Two-Step Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="glass" className="border-brand/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-step-2 font-semibold text-white">
                      Get Started
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= 1 ? 'bg-brand text-white' : 'bg-bg-800 text-gray-400'
                      }`}>
                        1
                      </div>
                      <div className="w-8 h-0.5 bg-gray-600" />
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= 2 ? 'bg-brand text-white' : 'bg-bg-800 text-gray-400'
                      }`}>
                        2
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-step-0">
                    {currentStep === 1 
                      ? "Let's start with the basics - your contact information."
                      : "Tell us about your project goals and we'll provide a detailed proposal."
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {currentStep === 1 ? (
                      <>
                        {/* Step 1: Contact Information */}
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="name" className="block text-step--1 font-medium text-white mb-2">
                                Name *
                              </label>
                              <input
                                {...register('name')}
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 glass border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                                placeholder="Your name"
                              />
                              {errors.name && (
                                <p className="mt-1 text-step--1 text-status-error">{errors.name.message}</p>
                              )}
                            </div>
                            
                            <div>
                              <label htmlFor="email" className="block text-step--1 font-medium text-white mb-2">
                                Email *
                              </label>
                              <input
                                {...register('email')}
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 glass border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                                placeholder="your@email.com"
                              />
                              {errors.email && (
                                <p className="mt-1 text-step--1 text-status-error">{errors.email.message}</p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label htmlFor="company" className="block text-step--1 font-medium text-white mb-2">
                              Company
                            </label>
                            <input
                              {...register('company')}
                              type="text"
                              id="company"
                              className="w-full px-4 py-3 glass border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                              placeholder="Your company"
                            />
                          </div>
                        </div>

                        <Button
                          type="button"
                          onClick={nextStep}
                          variant="primary"
                          size="lg"
                          className="w-full group"
                        >
                          Continue to project details
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </>
                    ) : (
                      <>
                        {/* Step 2: Project Details */}
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="budget" className="block text-step--1 font-medium text-white mb-2">
                                Budget Range *
                              </label>
                              <select
                                {...register('budget')}
                                id="budget"
                                className="w-full px-4 py-3 glass border border-gray-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                              >
                                <option value="">Select budget range</option>
                                {budgetOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              {errors.budget && (
                                <p className="mt-1 text-step--1 text-status-error">{errors.budget.message}</p>
                              )}
                            </div>
                            
                            <div>
                              <label htmlFor="goal" className="block text-step--1 font-medium text-white mb-2">
                                Primary Goal *
                              </label>
                              <select
                                {...register('goal')}
                                id="goal"
                                className="w-full px-4 py-3 glass border border-gray-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                              >
                                <option value="">Select primary goal</option>
                                {goalOptions.map((option) => (
                                  <option key={option.value} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                              {errors.goal && (
                                <p className="mt-1 text-step--1 text-status-error">{errors.goal.message}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button
                            type="button"
                            onClick={prevStep}
                            variant="ghost"
                            size="lg"
                            className="flex-1"
                          >
                            Back
                          </Button>
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                            className="flex-1 group"
                          >
                            {isSubmitting ? (
                              'Sending...'
                            ) : (
                              <>
                                Start a project
                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </Button>
                        </div>
                      </>
                    )}

                    {/* Submit Status */}
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center space-x-2 p-4 rounded-lg glass border ${
                          submitStatus.type === 'success' 
                            ? 'border-status-success/20 bg-status-success/10' 
                            : 'border-status-error/20 bg-status-error/10'
                        }`}
                      >
                        <p className={`text-step-0 ${
                          submitStatus.type === 'success' ? 'text-status-success' : 'text-status-error'
                        }`}>
                          {submitStatus.message}
                        </p>
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Alternative CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center space-y-6"
            >
              <Card variant="glass" className="text-center border-brand/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-step-2 font-semibold text-white mb-4">
                    Prefer a quick call?
                  </h3>
                  <p className="text-step-0 text-gray-400 mb-6">
                    Book a 20-minute consultation to discuss your project goals and get expert advice.
                  </p>
                  <Button variant="ghost" size="lg" className="group">
                    Book a 20-min call
                    <Calendar className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Privacy & GDPR Information */}
              <Card variant="glass" className="border-gray-700/50">
                <CardContent className="p-6">
                  <h4 className="text-step--1 font-medium text-white mb-3 flex items-center">
                    <Shield className="w-4 h-4 text-brand mr-2" />
                    Privacy & Data Protection
                  </h4>
                  <div className="space-y-2 text-step--1 text-gray-400">
                    <p>• We respect your privacy and never share your data</p>
                    <p>• GDPR compliant data handling</p>
                    <p>• You can unsubscribe anytime</p>
                    <p>• 24-hour response guarantee</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
