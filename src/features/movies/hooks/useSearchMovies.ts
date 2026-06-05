import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const useSearchMovies = (query: string) => {
  return useQuery({
    queryKey: ['search-movies', query],

    queryFn: () => movieService.searchMovies(query),

    enabled: query.trim().length > 0,
  });
};
