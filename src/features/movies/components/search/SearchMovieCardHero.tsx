import type { Movie } from '../../types/movie';
import SearchMovieCardMobile from '@/features/movies/components/search/SearchMovieCardMobile';
import SearchMovieCardDesktop from '@/features/movies/components/search/SearchMovieCardDesktop';

interface SearchMovieCardHeroProps {
  movie: Movie;
}

export default function SearchMovieCardHero({ movie }: SearchMovieCardHeroProps) {
  return (
    <>
      <div className="block md:hidden">
        <SearchMovieCardMobile movie={movie} />
      </div>

      <div className="hidden md:block">
        <SearchMovieCardDesktop movie={movie} />
      </div>
    </>
  );
}
