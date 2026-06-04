import { useTrendingMovies } from '../hooks/useTrendingMovies';
import MovieCarousel from '@/features/movies/components/MovieCarousel';

export default function TrendingSection() {
  const { data, isLoading } = useTrendingMovies();

  if (isLoading) {
    return null;
  }

  const movies = data?.results.filter((movie) => movie.poster_path).slice(0, 20) ?? [];

  return (
    <section
      className="
        px-xl
        py-5xl
        gap-3xl
        md:px-8
        lg:px-16
      "
    >
      <h2
        className="
          mx-4
          my-10
          text-display-xs
          font-bold
          text-neutral-25
          leading-display-xs
        "
      >
        Trending Now
      </h2>

      <MovieCarousel movies={movies} />
    </section>
  );
}
