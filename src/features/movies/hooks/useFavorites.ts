import { useState } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const stored = localStorage.getItem('favorites');

    return stored ? JSON.parse(stored) : [];
  });

  const isFavorite = (movieId: number) => {
    return favorites.includes(movieId);
  };

  const toggleFavorite = (movieId: number) => {
    const exists = favorites.includes(movieId);

    const updated = exists ? favorites.filter((id) => id !== movieId) : [...favorites, movieId];

    setFavorites(updated);

    localStorage.setItem('favorites', JSON.stringify(updated));

    return !exists;
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
