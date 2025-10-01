export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  sector: string;
  year: number;
  summary: string;
  heroImage: string;
  gallery: string[];
  problem: string;
  approach: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  tech: string[];
  testimonial: {
    quote: string;
    authorName: string;
    authorRole: string;
    company: string;
    avatar: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'techcorp-ecommerce',
    title: 'TechCorp E-commerce Platform',
    slug: 'techcorp-ecommerce',
    client: 'TechCorp',
    sector: 'E-commerce',
    year: 2024,
    summary: 'Built a high-performance e-commerce platform that increased conversions by 45% and reduced load times by 60%.',
    heroImage: '/images/case-studies/techcorp-hero.jpg',
    gallery: [
      '/images/case-studies/techcorp-1.jpg',
      '/images/case-studies/techcorp-2.jpg',
      '/images/case-studies/techcorp-3.jpg',
    ],
    problem: 'TechCorp needed a modern e-commerce platform to replace their outdated system. Their current platform had slow load times, poor mobile experience, and low conversion rates.',
    approach: 'We built a custom Next.js e-commerce platform with edge rendering, optimized images, and a mobile-first design approach. Implemented advanced analytics and A/B testing capabilities.',
    results: [
      '45% increase in conversion rate',
      '60% reduction in page load times',
      '99.9% uptime achieved',
      'Mobile traffic increased by 80%',
      'Customer satisfaction score improved to 4.8/5'
    ],
    metrics: [
      {
        label: 'Conversion Rate',
        value: '4.2%',
        improvement: '+45%'
      },
      {
        label: 'Page Load Time',
        value: '0.8s',
        improvement: '-60%'
      },
      {
        label: 'Mobile Traffic',
        value: '65%',
        improvement: '+80%'
      },
      {
        label: 'Uptime',
        value: '99.9%',
        improvement: '+0.3%'
      }
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Stripe', 'Sanity CMS'],
    testimonial: {
      quote: 'IE Global transformed our online presence. The new platform not only looks amazing but performs exceptionally well. Our sales have increased significantly.',
      authorName: 'Sarah Johnson',
      authorRole: 'CEO',
      company: 'TechCorp',
      avatar: '/images/testimonials/sarah-johnson.jpg'
    }
  },
  {
    id: 'healthcare-app',
    title: 'MedConnect Healthcare App',
    slug: 'healthcare-app',
    client: 'MedConnect',
    sector: 'Healthcare',
    year: 2024,
    summary: 'Developed a HIPAA-compliant mobile app that improved patient engagement by 70% and reduced appointment no-shows by 40%.',
    heroImage: '/images/case-studies/medconnect-hero.jpg',
    gallery: [
      '/images/case-studies/medconnect-1.jpg',
      '/images/case-studies/medconnect-2.jpg',
      '/images/case-studies/medconnect-3.jpg',
    ],
    problem: 'MedConnect needed a secure mobile app to help patients manage appointments, access medical records, and communicate with healthcare providers.',
    approach: 'We developed a React Native app with end-to-end encryption, HIPAA compliance, and intuitive UX design. Integrated with existing healthcare systems and implemented real-time notifications.',
    results: [
      '70% increase in patient engagement',
      '40% reduction in appointment no-shows',
      '95% user satisfaction rating',
      '50% faster appointment scheduling',
      'HIPAA compliance achieved'
    ],
    metrics: [
      {
        label: 'Patient Engagement',
        value: '85%',
        improvement: '+70%'
      },
      {
        label: 'No-show Rate',
        value: '8%',
        improvement: '-40%'
      },
      {
        label: 'User Satisfaction',
        value: '4.7/5',
        improvement: '+35%'
      },
      {
        label: 'Scheduling Time',
        value: '2 min',
        improvement: '-50%'
      }
    ],
    tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Firebase'],
    testimonial: {
      quote: 'The app has revolutionized how our patients interact with our healthcare services. The user experience is intuitive and the security features give us complete peace of mind.',
      authorName: 'Dr. Michael Chen',
      authorRole: 'Medical Director',
      company: 'MedConnect',
      avatar: '/images/testimonials/michael-chen.jpg'
    }
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(caseStudy => caseStudy.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

