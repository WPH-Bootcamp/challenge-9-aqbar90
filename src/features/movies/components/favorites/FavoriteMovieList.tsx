import FavoriteMovieCard from './FavoriteMovieCard';
import type { MovieDetail } from '../../types/movie';

interface Props {
  movies: MovieDetail[];
  onRemove: (id: number) => void;
}

export default function FavoriteMovieList({ movies, onRemove }: Props) {
  return (
    <div className="space-y-6">
      {movies.map((movie) => (
        <FavoriteMovieCard key={movie.id} movie={movie} onRemove={onRemove} />
      ))}
    </div>
  );
}
