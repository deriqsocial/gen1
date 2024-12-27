import { SuggestedQuestion } from './types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    id: '1',
    text: "What industries do you specialize in?",
    category: 'services'
  },
  {
    id: '2',
    text: "Can you help with AI implementation?",
    category: 'solutions'
  },
  {
    id: '3',
    text: "Tell me about your training programs",
    category: 'training'
  }
];

export async function generateResponse(message: string): Promise<string> {
  // Simulate API delay
  await delay(1000 + Math.random() * 1000);
  
  // Personalized responses based on message content
  if (message.toLowerCase().includes('pricing')) {
    return "Our pricing is customized based on your specific needs and project scope. I'd be happy to connect you with our solutions team to discuss your requirements in detail. What kind of AI solution are you interested in?";
  }
  
  if (message.toLowerCase().includes('training')) {
    return "We offer comprehensive AI training programs tailored to different skill levels. Our most popular programs include AI Fundamentals for Beginners, Advanced Machine Learning, and Industry-Specific AI Applications. Would you like to know more about any specific program?";
  }

  return "I understand you're interested in our AI solutions. Could you tell me more about your specific needs or what aspects you'd like to explore? I'm here to help guide you to the right solution.";
}