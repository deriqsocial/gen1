import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Innovation Hub, Victoria Island, Lagos, Nigeria'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+234 123 456 7890'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@genai4africa.com'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM WAT'
  }
];

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start">
          <detail.icon className="w-6 h-6 text-emerald-600 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold text-gray-900">{detail.title}</h3>
            <p className="text-gray-600 mt-1">{detail.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}