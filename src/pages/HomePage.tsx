import MovieCard from '../features/movies/components/MovieCard';
import { useTrendingMovies } from '@/features/movies/hooks/useTrendingMovies';

import HeroBanner from '@/features/movies/components/HeroBanner';

const HomePage = () => {
  const { data, isLoading } = useTrendingMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const heroMovie = data?.results?.[0];

  if (!heroMovie) {
    return <h1>No movie found</h1>;
  }

  return (
    <>
      <HeroBanner movie={heroMovie} />

      <div className="p-8">
        <h1
          className="
          mb-8
          text-display-md
          font-bold
        "
        >
          Trending Movies
        </h1>

        <div
          className="
          grid
          grid-cols-2
          gap-6
          md:grid-cols-4
        "
        >
          {data?.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              rating={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
