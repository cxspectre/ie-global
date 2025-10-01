export interface Service {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  heroImage: string;
  benefits: string[];
  deliverables: string[];
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
  };
}

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Custom Websites',
    slug: 'websites',
    summary: 'High-performance websites that load in <1s and convert 20–40% better',
    description: 'We build custom websites using modern technologies like Next.js, React, and edge computing to deliver exceptional performance and user experience.',
    heroImage: '/images/services/websites.jpg',
    benefits: [
      'Sub-second load times',
      'Mobile-first responsive design',
      'SEO optimized',
      'Accessibility compliant (WCAG AA)',
      'Edge-rendered for global performance'
    ],
    deliverables: [
      'Custom website design & development',
      'Content management system',
      'Performance optimization',
      'SEO setup & configuration',
      'Analytics & tracking implementation',
      'Ongoing maintenance & support'
    ],
    faq: [
      {
        question: 'How long does it take to build a custom website?',
        answer: 'Typically 4-8 weeks depending on complexity and requirements. We follow our 4D framework to ensure quality delivery.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer comprehensive maintenance packages including updates, security patches, and performance monitoring.'
      }
    ],
    cta: {
      title: 'Ready to build your custom website?',
      description: 'Get a free consultation and project estimate.'
    }
  },
  {
    id: 'apps',
    title: 'Mobile Apps',
    slug: 'apps',
    summary: 'Native iOS and Android apps that deliver exceptional user experiences',
    description: 'We develop native mobile applications using React Native and Swift, ensuring optimal performance and platform-specific features.',
    heroImage: '/images/services/apps.jpg',
    benefits: [
      'Native performance',
      'Cross-platform compatibility',
      'App Store optimization',
      'Push notifications',
      'Offline functionality'
    ],
    deliverables: [
      'iOS & Android app development',
      'UI/UX design',
      'Backend API integration',
      'App Store submission',
      'Push notification setup',
      'Analytics & crash reporting'
    ],
    faq: [
      {
        question: 'Do you build native or cross-platform apps?',
        answer: 'We primarily use React Native for cross-platform development, but can build native apps when platform-specific features are required.'
      },
      {
        question: 'How do you handle app store submissions?',
        answer: 'We handle the entire submission process including store listings, screenshots, and compliance requirements.'
      }
    ],
    cta: {
      title: 'Have an app idea?',
      description: 'Let\'s discuss your mobile app requirements and timeline.'
    }
  },
  {
    id: 'm365',
    title: 'Microsoft 365 Solutions',
    slug: 'm365',
    summary: 'Custom M365 solutions that enhance productivity and collaboration',
    description: 'We develop custom solutions using Microsoft 365 APIs, Power Platform, and SharePoint to streamline your business processes.',
    heroImage: '/images/services/m365.jpg',
    benefits: [
      'Seamless Office 365 integration',
      'Custom workflows & automation',
      'Enhanced collaboration tools',
      'Data security & compliance',
      'Scalable architecture'
    ],
    deliverables: [
      'SharePoint site development',
      'Power Apps & Power Automate',
      'Teams app development',
      'Custom connectors & APIs',
      'Migration & data integration',
      'Training & documentation'
    ],
    faq: [
      {
        question: 'What Microsoft 365 services do you work with?',
        answer: 'We work with SharePoint, Teams, Power Platform, Azure AD, and all core Office 365 applications.'
      },
      {
        question: 'Do you provide training for custom solutions?',
        answer: 'Yes, we include comprehensive training and documentation for all custom M365 solutions we deliver.'
      }
    ],
    cta: {
      title: 'Need custom M365 solutions?',
      description: 'Transform your Microsoft 365 experience with custom development.'
    }
  },
  {
    id: 'hosting',
    title: 'Cloud Hosting & DevOps',
    slug: 'hosting',
    summary: 'Reliable cloud hosting with 99.9% uptime and automated deployments',
    description: 'We provide managed cloud hosting solutions using AWS, Vercel, and other leading platforms with automated CI/CD pipelines.',
    heroImage: '/images/services/hosting.jpg',
    benefits: [
      '99.9% uptime guarantee',
      'Automated deployments',
      'Global CDN distribution',
      'SSL certificates included',
      '24/7 monitoring & support'
    ],
    deliverables: [
      'Cloud infrastructure setup',
      'CI/CD pipeline configuration',
      'Domain & DNS management',
      'SSL certificate installation',
      'Performance monitoring',
      'Backup & disaster recovery'
    ],
    faq: [
      {
        question: 'Which cloud platforms do you support?',
        answer: 'We work with AWS, Vercel, Netlify, and other leading cloud platforms based on your needs.'
      },
      {
        question: 'Do you provide 24/7 support?',
        answer: 'Yes, we offer 24/7 monitoring and support for all hosted applications and infrastructure.'
      }
    ],
    cta: {
      title: 'Need reliable hosting?',
      description: 'Get enterprise-grade hosting with expert support.'
    }
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    slug: 'marketing',
    summary: 'Data-driven marketing strategies that increase conversions and ROI',
    description: 'We develop comprehensive digital marketing strategies including SEO, PPC, content marketing, and analytics to grow your business.',
    heroImage: '/images/services/marketing.jpg',
    benefits: [
      'Data-driven strategies',
      'Multi-channel approach',
      'Conversion optimization',
      'ROI tracking & reporting',
      'Scalable campaigns'
    ],
    deliverables: [
      'SEO audit & optimization',
      'Google Ads management',
      'Content marketing strategy',
      'Social media management',
      'Analytics & reporting setup',
      'Conversion rate optimization'
    ],
    faq: [
      {
        question: 'How do you measure marketing success?',
        answer: 'We track key metrics including traffic, conversions, ROI, and customer acquisition cost with detailed monthly reports.'
      },
      {
        question: 'What industries do you work with?',
        answer: 'We work with businesses across all industries, from startups to enterprise companies.'
      }
    ],
    cta: {
      title: 'Ready to grow your business?',
      description: 'Let\'s create a marketing strategy that delivers results.'
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}

