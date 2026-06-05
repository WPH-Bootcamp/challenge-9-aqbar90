import MovieCard from '../MovieCard';
import type { Movie } from '../../types/movie';

interface SearchResultsProps {
  movies: Movie[];
}

export default function SearchResults({ movies }: SearchResultsProps) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          rank={movie.id}
          title={movie.title}
          posterPath={movie.poster_path ?? ''}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
}
