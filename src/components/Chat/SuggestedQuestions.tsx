import React from 'react';
import { useChat } from './ChatContext';
import { suggestedQuestions } from './chatUtils';

export default function SuggestedQuestions() {
  const { sendMessage } = useChat();

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Suggested questions to get started:</p>
      <div className="flex flex-wrap gap-2">
        {suggestedQuestions.map((question) => (
          <button
            key={question.id}
            onClick={() => sendMessage(question.text)}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm rounded-full transition-colors"
          >
            {question.text}
          </button>
        ))}
      </div>
    </div>
  );
}