import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const useMovieDetail = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-detail', movieId],

    queryFn: () => movieService.getMovieDetail(movieId),
  });
};
