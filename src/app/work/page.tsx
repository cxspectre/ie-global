import { Metadata } from 'next';
import { WorkPageContent } from './work-content';

export const metadata: Metadata = {
  title: 'Our Work - Case Studies & Portfolio',
  description: 'Explore our portfolio of successful projects including custom websites, mobile apps, and digital solutions that delivered measurable business results.',
  openGraph: {
    title: 'Our Work - IE Global',
    description: 'Case studies showcasing our AI-driven development approach and measurable business results.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}