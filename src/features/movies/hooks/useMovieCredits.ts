import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const useMovieCredits = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-credits', movieId],

    queryFn: () => movieService.getMovieCredits(movieId),
  });
};
