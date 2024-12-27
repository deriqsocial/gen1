import { Brain, LineChart, Users, BookOpen, Code, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'AI Readiness Assessment',
    description: 'Comprehensive evaluation of your organization\'s AI implementation capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80',
    icon: Brain
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI applications designed for African market needs and challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    icon: LineChart
  },
  {
    title: 'Training & Workshops',
    description: 'Hands-on training programs for professionals and organizations.',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    icon: Users
  },
  {
    title: 'Research & Development',
    description: 'Cutting-edge research in AI applications for African contexts.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    icon: BookOpen
  },
  {
    title: 'Implementation Support',
    description: 'End-to-end support in deploying AI solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
    icon: Code
  },
  {
    title: 'AI Governance',
    description: 'Guidance on ethical AI implementation and governance frameworks.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    icon: Shield
  }
];