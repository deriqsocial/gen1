import React from 'react';
import InsightCard from './InsightCard';

const insights = [
  {
    title: 'AI in African Agriculture: A Game Changer',
    description: 'How AI is revolutionizing farming practices across the continent.',
    date: 'Mar 15, 2024',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1593179357196-ea11a2e7c119?auto=format&fit=crop&q=80'
  },
  {
    title: 'The Future of Healthcare in Africa',
    description: 'Exploring AI applications in improving healthcare accessibility.',
    date: 'Mar 12, 2024',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    title: 'Digital Education Revolution',
    description: 'How AI is making quality education accessible to all.',
    date: 'Mar 10, 2024',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends and developments in AI across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>
    </section>
  );
}