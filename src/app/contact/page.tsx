import { Metadata } from 'next';
import { ContactPageContent } from './contact-content';

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with Your Project',
  description: 'Ready to transform your digital presence? Contact IE Global for a free consultation and discover how our AI-enhanced development can deliver measurable results.',
  openGraph: {
    title: 'Contact Us - IE Global',
    description: 'Get a free consultation and start your high-performance digital project today.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}