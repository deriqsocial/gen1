import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServiceCard({ icon: Icon, title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Card Container */}
      <div className="h-[400px] w-[300px] relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6 transform transition-transform duration-300">
          {/* Icon */}
          <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Icon className="h-6 w-6 text-emerald-600" />
          </div>

          {/* Text Content */}
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}