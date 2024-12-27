export interface LumaEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  imageUrl?: string;
  registrationUrl: string;
  capacity: number;
  remainingSpots: number;
}

export interface EventsState {
  events: LumaEvent[];
  isLoading: boolean;
  error: string | null;
}