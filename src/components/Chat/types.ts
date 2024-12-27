export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  category: string;
}

export interface ChatContextValue {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (content: string) => Promise<void>;
}