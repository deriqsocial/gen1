import React from 'react';
import ContactInfo from './ContactInfo';
import ChatBox from '../Chat/ChatBox';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chat with our AI assistant or reach out through traditional channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
            <ContactInfo />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Chat with Our AI Assistant</h3>
            <ChatBox />
          </div>
        </div>
      </div>
    </section>
  );
}