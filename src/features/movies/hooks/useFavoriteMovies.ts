import { useQueries } from '@tanstack/react-query';
import { movieService } from '../services/movieService';
import { useFavorites } from './useFavorites';
import type { MovieDetail } from '../types/movie';

export function useFavoriteMovies() {
  const { favorites } = useFavorites();

  const queries = useQueries({
    queries: favorites.map((id) => ({
      queryKey: ['movie', id],
      queryFn: () => movieService.getMovieDetail(id),
    })),
  });

  return queries
    .map((query) => query.data)
    .filter((movie): movie is MovieDetail => movie !== undefined);
}
