import { create } from 'zustand';

export const useItemStore = create((set) => ({
  dogs: [],
  fetchDogs: async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random/12');
    const data = await res.json();
    set({ dogs: data.message });
  }
}));
