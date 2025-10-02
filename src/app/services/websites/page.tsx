import { Metadata } from 'next';
import { WebsitesPageContent } from './websites-content';

export const metadata: Metadata = {
  title: 'Custom Website Development - High-Performance Web Solutions',
  description: 'Custom websites that load in <1s and convert 20-40% better. We build high-performance web applications using Next.js, React, and edge computing.',
  openGraph: {
    title: 'Custom Website Development - IE Global',
    description: 'High-performance websites that load in <1s and convert 20-40% better with AI-enhanced development.',
  },
};

export default function WebsitesPage() {
  return <WebsitesPageContent />;
}