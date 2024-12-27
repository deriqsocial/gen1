import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services/Services';
import Industries from './components/Industries';
import Insights from './components/Insights/Insights';
import Events from './components/Events/Events';
import StatsCounter from './components/Stats/StatsCounter';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Industries />
      <Insights />
      <Events />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming Africa's tech landscape through AI innovation
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}