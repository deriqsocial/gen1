import React, { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import { useChat } from './ChatContext';

export default function ChatInput() {
  const [input, setInput] = useState('');
  const { sendMessage, isTyping } = useChat();

  const handleSubmit = async () => {
    if (input.trim() && !isTyping) {
      await sendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-gray-100 p-4">
      <div className="flex gap-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 resize-none rounded-lg border border-gray-200 p-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
          rows={1}
          disabled={isTyping}
        />
        <button
          onClick={handleSubmit}
          disabled={isTyping || !input.trim()}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}