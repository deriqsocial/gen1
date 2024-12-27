import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <Brain className="h-16 w-16 mx-auto mb-8 text-emerald-600" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Africa Through
            <span className="text-emerald-600"> AI Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Transforming industries across Africa with cutting-edge AI solutions. 
            Join us in shaping the future of technology on the continent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}