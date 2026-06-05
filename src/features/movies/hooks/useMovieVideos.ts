import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const useMovieVideos = (movieId: number) => {
  return useQuery({
    queryKey: ['movie-videos', movieId],
    queryFn: () => movieService.getMovieVideos(movieId),
    enabled: !!movieId,
  });
};
