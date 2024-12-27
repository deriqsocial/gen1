import React from 'react';
import CountUp from './CountUp';
import { Brain, Users, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: Brain,
    value: 100,
    suffix: '+',
    label: 'Workshops',
    sublabel: 'Conducted Across Africa'
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Professionals',
    sublabel: 'Trained & Certified'
  },
  {
    icon: GraduationCap,
    value: 15,
    suffix: '+',
    label: 'Countries',
    sublabel: 'Impacted'
  }
];

export default function StatsCounter() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Content */}
          <div className="relative">
            <stat.icon className="h-10 w-10 text-emerald-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
            
            <div className="text-4xl font-bold text-gray-900 mb-2 flex items-baseline">
              <CountUp
                end={stat.value}
                duration={2000 + index * 500}
                suffix={stat.suffix}
              />
            </div>
            
            <div className="space-y-1">
              <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>
      ))}
    </div>
  );
}