import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['popular-movies'],
    queryFn: movieService.getPopularMovies,
  });
};
