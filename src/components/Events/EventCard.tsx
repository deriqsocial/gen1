import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { LumaEvent } from './types';

interface EventCardProps {
  event: LumaEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
      {event.imageUrl && (
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="w-full h-48 object-cover rounded-lg mb-6"
        />
      )}
      
      <div className="space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm mb-2">
            {event.remainingSpots > 0 ? `${event.remainingSpots} spots left` : 'Sold Out'}
          </span>
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
        </div>

        <p className="text-gray-600 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {formatDate(event.startDate)}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {formatTime(event.startDate)}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
        </div>
        
        <a 
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-2 rounded-lg transition-colors ${
            event.remainingSpots > 0
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={e => event.remainingSpots === 0 && e.preventDefault()}
        >
          {event.remainingSpots > 0 ? 'Register Now' : 'Sold Out'}
        </a>
      </div>
    </div>
  );
}