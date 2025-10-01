import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about IE Global, an AI-driven digital agency delivering custom web, app, and M365 solutions with a focus on performance and accessibility.',
};

const values = [
  {
    icon: Target,
    title: 'Performance First',
    description: 'We build solutions that load fast, scale efficiently, and deliver exceptional user experiences.',
  },
  {
    icon: Award,
    title: 'Quality Craft',
    description: 'Every line of code is written with care, following best practices and industry standards.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the results we deliver for you.',
  },
  {
    icon: CheckCircle,
    title: 'Accessibility',
    description: 'We ensure all our solutions are accessible to everyone, meeting WCAG AA standards.',
  },
];

const team = [
  {
    name: 'Cassian Drefke',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 10+ years of experience building high-performance web applications and mobile apps.',
    image: '/images/team/cassian.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    bio: 'Designer focused on creating intuitive, accessible interfaces that drive conversions and user engagement.',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist ensuring reliable, scalable, and secure hosting solutions for all our projects.',
    image: '/images/team/michael.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-step-5 font-display font-bold text-white mb-6">
              About IE Global
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              We're an AI-driven digital agency that builds custom web applications, 
              mobile apps, and M365 solutions that deliver real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-step-0 text-gray-300">
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">10+</div>
                <div>Years experience</div>
              </div>
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">50+</div>
                <div>Projects delivered</div>
              </div>
              <div className="text-center">
                <div className="text-step-3 font-bold text-brand">99.9%</div>
                <div>Client satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-step-4 font-display font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-step-1 text-gray-400 mb-6 leading-body">
                We believe that technology should enhance human potential, not complicate it. 
                Our mission is to build digital solutions that are not only powerful and 
                performant, but also intuitive and accessible to everyone.
              </p>
              <p className="text-step-0 text-gray-300 leading-body">
                Every project we undertake is an opportunity to push the boundaries of what's 
                possible, using cutting-edge technologies like AI, edge computing, and modern 
                web standards to create experiences that delight users and drive business growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-square bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-2xl flex items-center justify-center"
            >
              <span className="text-6xl">🚀</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do, from initial concept to final delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-step-0 text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We're a small but mighty team of experts passionate about building exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <Card variant="glass" className="text-center">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-brand to-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-step-0 text-brand mb-4">
                      {member.role}
                    </p>
                    <p className="text-step--1 text-gray-400">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand/10 to-brand-accent/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start a project
              </Button>
              <Button variant="ghost" size="lg">
                Schedule a call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

