import { create } from 'zustand';
// import { Movie } from '@/types/movie';

// TODO: Define your store state interface
interface MovieStore {
  favorites: number[];

  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}
// TODO: Add state properties
// Examples: favorites, watchlist, selectedMovie, etc.

// TODO: Add action methods
// Examples: addToFavorites, removeFromFavorites, etc.

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

export const useMovieStore = create<MovieStore>((set) => ({
  favorites: [],

  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((movieId) => movieId !== id),
    })),
}));
