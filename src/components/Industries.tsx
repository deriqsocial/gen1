import React from 'react';
import { Sprout, Stethoscope, GraduationCap, Building2, Factory, Truck } from 'lucide-react';

const industries = [
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'AI-powered solutions for crop management, yield prediction, and sustainable farming.',
    image: 'https://images.unsplash.com/photo-1593179357196-ea11a2e7c119?auto=format&fit=crop&q=80'
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Diagnostic assistance, patient care optimization, and healthcare resource management.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Personalized learning platforms and educational resource optimization.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
  },
  {
    icon: Building2,
    title: 'Financial Services',
    description: 'Risk assessment, fraud detection, and automated financial advisory systems.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80'
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming sectors across Africa with innovative AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover opacity-20"
                />
              </div>
              <div className="relative p-8">
                <industry.icon className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}