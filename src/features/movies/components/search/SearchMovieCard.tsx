import MovieCard from '../MovieCard';
import type { Movie } from '../../types/movie';

interface Props {
  movies: Movie[];
}

export default function SearchResults({ movies }: Props) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-4

        md:grid-cols-3

        lg:grid-cols-5
      "
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path ?? ''}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
}
