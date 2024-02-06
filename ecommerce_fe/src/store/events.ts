import { create } from 'zustand';

interface EventStore {
  isFiltersOpen: boolean;
  setIsFiltersOpen: (isOpen: boolean) => void;
}

const eventsStore = create<EventStore>((set) => ({
  isFiltersOpen: false,
  setIsFiltersOpen: (isOpen) => set({ isFiltersOpen: isOpen }),
}));

export const useEventsStore = eventsStore;
