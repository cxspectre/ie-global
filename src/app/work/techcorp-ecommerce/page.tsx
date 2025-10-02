import { Metadata } from 'next';
import { TechCorpPageContent } from './techcorp-content';

export const metadata: Metadata = {
  title: 'TechCorp E-commerce Case Study - 31% Signup Rate Increase',
  description: 'How we helped TechCorp increase signup rates by 31% in 6 weeks through performance optimization and UX improvements.',
  openGraph: {
    title: 'TechCorp E-commerce Case Study - IE Global',
    description: 'Real results: 31% signup rate increase in 6 weeks through AI-enhanced development.',
  },
};

export default function TechCorpPage() {
  return <TechCorpPageContent />;
}