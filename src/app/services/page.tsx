import { Metadata } from 'next';
import { ServicesPageContent } from './services-content';

export const metadata: Metadata = {
  title: 'Services - Custom Web Development & Digital Solutions',
  description: 'Comprehensive digital solutions including custom websites, mobile apps, M365 solutions, cloud hosting, and digital marketing. AI-driven development that delivers measurable results.',
  openGraph: {
    title: 'Services - IE Global',
    description: 'AI-driven digital solutions that deliver sub-second performance and 20-40% better conversions.',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}