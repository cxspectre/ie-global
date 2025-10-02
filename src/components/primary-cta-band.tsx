'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Calendar } from 'lucide-react';

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
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CTAFormData>({
    resolver: zodResolver(ctaSchema),
  });

  const onSubmit = async (data: CTAFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thanks! We\'ll get back to you within 24 hours.' 
      });
      reset();
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
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="glass">
                <CardHeader>
                  <CardTitle className="text-step-2 font-semibold text-white">
                    Get Started
                  </CardTitle>
                  <CardDescription className="text-step-0">
                    Tell us about your project and we'll provide a detailed proposal.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-step--1 font-medium text-white mb-2">
                          Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-step--1 text-status-error">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-step--1 font-medium text-white mb-2">
                        Company
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>

                    {/* Budget and Goal */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-step--1 font-medium text-white mb-2">
                          Budget Range *
                        </label>
                        <select
                          {...register('budget')}
                          id="budget"
                          className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
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
                          className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
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

                    {/* Submit Status */}
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center space-x-2 p-4 rounded-lg ${
                          submitStatus.type === 'success' 
                            ? 'bg-status-success/10 border border-status-success/20' 
                            : 'bg-status-error/10 border border-status-error/20'
                        }`}
                      >
                        <p className={`text-step-0 ${
                          submitStatus.type === 'success' ? 'text-status-success' : 'text-status-error'
                        }`}>
                          {submitStatus.message}
                        </p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full group"
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
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Alternative CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <Card variant="glass" className="text-center">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-brand" />
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
