'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface StatProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

function Stat({ value, label, icon, delay = 0 }: StatProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-2">
        {icon && <span className="mr-2 text-brand">{icon}</span>}
        <span className="text-step-4 font-display font-bold text-white">
          {value}
        </span>
      </div>
      <p className="text-step-0 text-gray-400">{label}</p>
    </motion.div>
  );
}

const stats = [
  {
    value: '<1s',
    label: 'Average load time',
    icon: '⚡'
  },
  {
    value: '99.9%',
    label: 'Uptime guarantee',
    icon: '🛡️'
  },
  {
    value: '+40%',
    label: 'Conversion improvement',
    icon: '📈'
  },
  {
    value: 'WCAG AA',
    label: 'Accessibility compliance',
    icon: '♿'
  }
];

export function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-bg-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-step-3 font-display font-bold text-white mb-4">
            Proven Results
          </h2>
          <p className="text-step-0 text-gray-400 max-w-2xl mx-auto">
            Our solutions consistently deliver measurable improvements in performance, 
            accessibility, and business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

