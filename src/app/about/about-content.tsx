'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Brain, Zap, Shield, Heart } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Performance First',
    description: 'We obsess over speed and efficiency. Every line of code is optimized for sub-second load times and maximum user satisfaction.',
  },
  {
    icon: Award,
    title: 'Quality Craft',
    description: 'We believe in building things right the first time. Our code is clean, accessible, and follows industry best practices.',
  },
  {
    icon: Users,
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by the real business results we deliver for our clients.',
  },
  {
    icon: Brain,
    title: 'AI-Enhanced',
    description: 'We leverage cutting-edge AI tools to accelerate development, improve quality, and deliver innovative solutions.',
  },
];

const team = [
  {
    name: 'Cassian Drefke',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack developer with 10+ years of experience building high-performance web applications. Passionate about AI-enhanced development and creating digital experiences that actually work.',
    expertise: ['Next.js', 'React', 'TypeScript', 'AI/ML Integration'],
    image: '/images/team/cassian.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    bio: 'Designer focused on creating intuitive, accessible interfaces that drive conversions. Specializes in mobile-first design and user research.',
    expertise: ['UI/UX Design', 'Accessibility', 'User Research', 'Figma'],
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'DevOps Engineer',
    bio: 'Infrastructure specialist ensuring reliable, scalable, and secure hosting solutions. Expert in cloud architecture and performance optimization.',
    expertise: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
    image: '/images/team/michael.jpg',
  },
];

const aiCapabilities = [
  {
    icon: Zap,
    title: 'Code Generation',
    description: 'AI-assisted development that accelerates coding while maintaining quality and best practices.',
  },
  {
    icon: Brain,
    title: 'Performance Optimization',
    description: 'Machine learning algorithms that automatically optimize code for speed and efficiency.',
  },
  {
    icon: Shield,
    title: 'Security Analysis',
    description: 'AI-powered security scanning that identifies vulnerabilities before they become problems.',
  },
  {
    icon: Heart,
    title: 'User Experience',
    description: 'Data-driven insights that help us create more intuitive and engaging user experiences.',
  },
];

export function AboutPageContent() {
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
              We're Not Just Developers—We're Digital Illusionists
            </h1>
            <p className="text-step-1 text-gray-400 mb-8">
              At IE Global, we believe technology should enhance human potential, not complicate it. 
              We're an AI-driven digital agency that builds custom web applications, mobile apps, 
              and M365 solutions that deliver real business results.
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
                Our Mission: Making Technology Invisible
              </h2>
              <p className="text-step-1 text-gray-400 mb-6 leading-body">
                We believe the best technology is invisible—it just works. Our mission is to build 
                digital solutions that are not only powerful and performant, but also intuitive and 
                accessible to everyone.
              </p>
              <p className="text-step-0 text-gray-300 leading-body mb-6">
                Every project we undertake is an opportunity to push the boundaries of what's possible, 
                using cutting-edge AI tools, edge computing, and modern web standards to create 
                experiences that delight users and drive business growth.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h4 className="text-step-0 font-medium text-white">AI-Enhanced Development</h4>
                  <p className="text-step--1 text-gray-400">We leverage AI to build better, faster, and more innovative solutions</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="aspect-square bg-gradient-to-br from-brand/20 to-brand-accent/20 rounded-2xl flex items-center justify-center"
            >
              <span className="text-6xl">🎭</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              How We Leverage AI for Competitive Advantage
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We don't just use AI as a buzzword—we integrate it into every aspect of our development 
              process to deliver faster, more accurate, and more innovative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <capability.icon className="w-8 h-8 text-brand" />
                    </div>
                    <h3 className="text-step-2 font-semibold text-white mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-step-0 text-gray-400">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-bg-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do, from initial concept to final delivery. 
              They're not just words on a wall—they're the foundation of how we work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-step-1 text-gray-400 max-w-3xl mx-auto">
              We're a small but mighty team of experts passionate about building exceptional 
              digital experiences. Each of us brings unique skills and perspectives to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <Card variant="glass" className="h-full">
                  <CardContent className="p-8 text-center">
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
                    <p className="text-step--1 text-gray-400 mb-6">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-bg-800 text-step--1 text-gray-300 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-step-4 font-display font-bold text-white mb-4">
              Ready to Work with Digital Illusionists?
            </h2>
            <p className="text-step-1 text-gray-400 mb-8">
              Let's discuss your project and see how our AI-enhanced development process 
              can create something truly magical for your business.
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
