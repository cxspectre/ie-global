'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter, Shield, Clock } from 'lucide-react';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Work', href: '/work' },
      { name: 'Careers', href: '/careers' },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Websites', href: '/services/websites' },
      { name: 'Apps', href: '/services/apps' },
      { name: 'M365', href: '/services/m365' },
      { name: 'Hosting', href: '/services/hosting' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Imprint', href: '/imprint' },
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ie-global', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ieglobal', icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-bg-900 via-bg-800 to-bg-900 border-t border-bg-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary-violet/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-brand to-brand-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">IE</span>
              </div>
              <span className="text-xl font-display font-bold text-white">
                IE Global
              </span>
            </div>
            <p className="text-step-0 text-gray-400 mb-6 leading-relaxed">
              AI-driven digital agency delivering custom web, app, and M365 solutions 
              that move KPIs and drive business growth.
            </p>
            
            {/* Enhanced Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-brand" />
                </div>
                <a 
                  href="mailto:hello@cxspectre.github.io/ie-global" 
                  className="text-step-0 text-gray-300 hover:text-white transition-colors"
                >
                  hello@cxspectre.github.io/ie-global
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand" />
                </div>
                <span className="text-step-0 text-gray-300">Brussels, Belgium</span>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-6 p-4 glass rounded-lg border border-gray-700/50">
              <h4 className="text-step--1 font-medium text-white mb-3 flex items-center">
                <Shield className="w-4 h-4 text-brand mr-2" />
                Certifications
              </h4>
              <div className="space-y-2 text-step--1 text-gray-400">
                <p>• GDPR Compliant</p>
                <p>• WCAG 2.2 AA</p>
                <p>• ISO 27001 Ready</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-step-1 font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-step-0 text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-bg-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-step-0 text-gray-400">
                © 2024 IE Global. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-status-success">
                  <Shield className="w-4 h-4" />
                  <span className="text-step--1">99.9% uptime</span>
                </div>
                <div className="flex items-center space-x-2 text-secondary-emerald">
                  <Clock className="w-4 h-4" />
                  <span className="text-step--1">24h response</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-step-0 text-gray-400 hover:text-white transition-colors">
                Cookie preferences
              </button>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-bg-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand/20 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
