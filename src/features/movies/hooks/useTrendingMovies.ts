import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const useTrendingMovies = () => {
  return useQuery({
    queryKey: ['trending-movies'],
    queryFn: movieService.getTrendingMovies,
  });
};
