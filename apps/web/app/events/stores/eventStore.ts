
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Event {
  id: string;
  name: string;
  date: string;
}

interface EventStore {
  events: Event[];
  searchQuery: string;
  addEvent: (event: Omit<Event, 'id'>) => void;
  deleteEvent: (id: string) => void;
  setSearchQuery: (query: string) => void;
  getFilteredEvents: () => Event[];
}

export const useEventStore = create<EventStore>()(
  persist(
    (set, get) => ({
      events: [],
      searchQuery: '',
      
      addEvent: (event) => {
        const newEvent: Event = {
          ...event,
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        };
        set((state) => ({
          events: [...state.events, newEvent],
        }));
      },
      
      deleteEvent: (id) => {
        set((state) => ({
          events: state.events.filter((event) => event.id !== id),
        }));
      },
      
      setSearchQuery: (query) => {
        set({ searchQuery: query });
      },
      
      getFilteredEvents: () => {
        const { events, searchQuery } = get();
        if (!searchQuery.trim()) {
          return events;
        }
        return events.filter((event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      },
    }),
    {
      name: 'event-storage',
      partialize: (state) => ({ events: state.events }),
    }
  )
);