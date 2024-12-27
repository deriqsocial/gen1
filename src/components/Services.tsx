import React from 'react';
import { Brain, LineChart, Users, BookOpen, Code, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Readiness Assessment',
    description: 'Comprehensive evaluation of your organization\'s AI implementation capabilities.'
  },
  {
    icon: LineChart,
    title: 'Custom AI Solutions',
    description: 'Tailored AI applications designed for African market needs and challenges.'
  },
  {
    icon: Users,
    title: 'Training & Workshops',
    description: 'Hands-on training programs for professionals and organizations.'
  },
  {
    icon: BookOpen,
    title: 'Research & Development',
    description: 'Cutting-edge research in AI applications for African contexts.'
  },
  {
    icon: Code,
    title: 'Implementation Support',
    description: 'End-to-end support in deploying AI solutions.'
  },
  {
    icon: Shield,
    title: 'AI Governance',
    description: 'Guidance on ethical AI implementation and governance frameworks.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored for African businesses and organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-gray-100 hover:border-emerald-600 transition-all hover:shadow-lg cursor-pointer"
            >
              <service.icon className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}