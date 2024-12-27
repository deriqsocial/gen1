import React from 'react';
import { Message } from './types';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isUser ? 'bg-emerald-100' : 'bg-gray-100'}`}>
        {isUser ? (
          <User className="w-5 h-5 text-emerald-600" />
        ) : (
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80" 
            alt="AI"
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
      </div>
      
      <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block rounded-2xl px-4 py-2 ${
          isUser ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-800'
        }`}>
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {message.status === 'sending' && (
          <p className="text-xs text-gray-400 mt-1">Sending...</p>
        )}
      </div>
    </div>
  );
}