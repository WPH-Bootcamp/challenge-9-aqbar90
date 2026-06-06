import type { Movie } from '../../types/movie';
import SearchMovieCardHero from '@/features/movies/components/search/SearchMovieCardHero';

interface SearchResultsProps {
  movies: Movie[];
}

export default function SearchResults({ movies }: SearchResultsProps) {
  if (!movies.length) {
    return (
      <div
        className="
          py-20
          text-center
          text-neutral-400
        "
      >
        No movie found
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {movies.map((movie) => (
        <SearchMovieCardHero key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
