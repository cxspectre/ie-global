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
    <footer className="bg-bg-900 border-t border-bg-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IE</span>
              </div>
              <span className="text-xl font-display font-bold text-white">
                IE Global
              </span>
            </div>
            <p className="text-step-0 text-gray-400 mb-6">
              AI-driven digital agency delivering custom web, app, and M365 solutions 
              that move KPIs.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand" />
                <a 
                  href="mailto:hello@ie-global.example" 
                  className="text-step-0 text-gray-300 hover:text-white transition-colors"
                >
                  hello@ie-global.example
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand" />
                <span className="text-step-0 text-gray-300">Brussels</span>
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

        {/* Bottom Section */}
        <div className="border-t border-bg-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-step-0 text-gray-400">
                © 2024 IE Global. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-status-success">
                <Shield className="w-4 h-4" />
                <span className="text-step--1">99.9% uptime</span>
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
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
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
