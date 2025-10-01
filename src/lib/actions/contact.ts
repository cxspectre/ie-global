'use server';

import { z } from 'zod';

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

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the form data
    const validatedData = contactSchema.parse(data);

    // In a real application, you would:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Integrate with CRM
    // 4. Send notifications to team

    // For now, we'll just log the data
    console.log('Contact form submission:', validatedData);

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your form data and try again.',
        errors: error.errors
      };
    }

    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    };
  }
}

