'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormData } from '@/lib/actions/contact';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.enum(['websites', 'apps', 'm365', 'hosting', 'marketing', 'other']),
  budget: z.enum(['under-10k', '10k-25k', '25k-50k', '50k-100k', 'over-100k']),
  timeline: z.enum(['asap', '1-3-months', '3-6-months', '6-12-months', 'flexible']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: 'websites', label: 'Custom Websites' },
  { value: 'apps', label: 'Mobile Apps' },
  { value: 'm365', label: 'Microsoft 365 Solutions' },
  { value: 'hosting', label: 'Cloud Hosting & DevOps' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' },
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-12-months', label: '6-12 months' },
  { value: 'flexible', label: 'Flexible' },
];

export function ContactForm() {
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
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        reset();
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card variant="glass" className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-step-3 font-display font-bold text-white">
          Start Your Project
        </CardTitle>
        <CardDescription className="text-step-0">
          Tell us about your project and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

          {/* Company and Phone */}
          <div className="grid md:grid-cols-2 gap-4">
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
            
            <div>
              <label htmlFor="phone" className="block text-step--1 font-medium text-white mb-2">
                Phone
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-step--1 font-medium text-white mb-2">
              Service *
            </label>
            <select
              {...register('service')}
              id="service"
              className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            >
              <option value="">Select a service</option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-step--1 text-status-error">{errors.service.message}</p>
            )}
          </div>

          {/* Budget and Timeline */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="budget" className="block text-step--1 font-medium text-white mb-2">
                Budget *
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
              <label htmlFor="timeline" className="block text-step--1 font-medium text-white mb-2">
                Timeline *
              </label>
              <select
                {...register('timeline')}
                id="timeline"
                className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.timeline && (
                <p className="mt-1 text-step--1 text-status-error">{errors.timeline.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-step--1 font-medium text-white mb-2">
              Project Details *
            </label>
            <textarea
              {...register('message')}
              id="message"
              rows={4}
              className="w-full px-4 py-3 bg-bg-800 border border-gray-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none"
              placeholder="Tell us about your project goals, requirements, and any specific challenges you're facing..."
            />
            {errors.message && (
              <p className="mt-1 text-step--1 text-status-error">{errors.message.message}</p>
            )}
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
              {submitStatus.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-status-success" />
              ) : (
                <AlertCircle className="w-5 h-5 text-status-error" />
              )}
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
                Send message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

