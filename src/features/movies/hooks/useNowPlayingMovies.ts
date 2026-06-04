import { useQuery } from '@tanstack/react-query';
import { movieService } from '../services/movieService';

export const useNowPlayingMovies = () => {
  return useQuery({
    queryKey: ['now-playing-movies'],
    queryFn: movieService.getNowPlayingMovies,
  });
};
