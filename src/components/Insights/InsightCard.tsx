import React from 'react';
import { CalendarDays } from 'lucide-react';

interface InsightCardProps {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export default function InsightCard({ title, description, date, category, image }: InsightCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <CalendarDays className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
          Read more →
        </button>
      </div>
    </article>
  );
}