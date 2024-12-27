import { LumaEvent } from './types';

export const mockEvents: LumaEvent[] = [
  {
    id: '1',
    title: 'AI in Agriculture Workshop',
    description: 'Hands-on workshop on implementing AI solutions in agricultural practices.',
    startDate: '2024-04-15T10:00:00Z',
    endDate: '2024-04-15T16:00:00Z',
    location: 'Lagos, Nigeria',
    imageUrl: 'https://images.unsplash.com/photo-1593179357196-ea11a2e7c119?auto=format&fit=crop&q=80',
    registrationUrl: '#',
    capacity: 50,
    remainingSpots: 20
  },
  {
    id: '2',
    title: 'Healthcare AI Summit',
    description: 'Exploring the future of AI in African healthcare systems.',
    startDate: '2024-04-20T09:00:00Z',
    endDate: '2024-04-20T17:00:00Z',
    location: 'Nairobi, Kenya',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
    registrationUrl: '#',
    capacity: 100,
    remainingSpots: 45
  },
  {
    id: '3',
    title: 'EdTech Innovation Forum',
    description: 'Discussion on AI-powered educational technologies.',
    startDate: '2024-04-25T11:00:00Z',
    endDate: '2024-04-25T15:00:00Z',
    location: 'Cape Town, South Africa',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    registrationUrl: '#',
    capacity: 75,
    remainingSpots: 30
  }
];