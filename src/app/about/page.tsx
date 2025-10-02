import { Metadata } from 'next';
import { AboutPageContent } from './about-content';

export const metadata: Metadata = {
  title: 'About Us - AI-Driven Digital Agency',
  description: 'Learn about IE Global, an AI-driven digital agency delivering custom web, app, and M365 solutions with a focus on performance, accessibility, and measurable results.',
  openGraph: {
    title: 'About Us - IE Global',
    description: 'Meet the team behind IE Global and discover our AI-enhanced approach to digital development.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
