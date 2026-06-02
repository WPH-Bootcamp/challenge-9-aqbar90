import { create } from 'zustand';
import type { Movie } from '@/features/movies/types/movie';

interface FavoriteStore {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorites: [],
  addFavorite: (movie) =>
    set((state) => ({
      favorites: [...state.favorites, movie],
    })),
  removeFavorite: (movieId) =>
    set((state) => ({
      favorites: state.favorites.filter((movie) => movie.id !== movieId),
    })),
  isFavorite: (movieId) => get().favorites.some((movie) => movie.id === movieId),
}));
