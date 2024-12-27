import { useState, useEffect } from 'react';
import { EventsState } from './types';
import { mockEvents } from './mockData';

export function useLumaEvents() {
  const [state, setState] = useState<EventsState>({
    events: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    // Simulate API call with mock data
    const fetchEvents = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setState({
          events: mockEvents,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch events'
        }));
      }
    };

    fetchEvents();
  }, []);

  return state;
}