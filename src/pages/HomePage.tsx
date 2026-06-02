import MovieCard from '../features/movies/components/MovieCard';

import { useTrendingMovies } from '@/features/movies/hooks/useTrendingMovies';

const HomePage = () => {
  const { data, isLoading } = useTrendingMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
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
  );
};

export default HomePage;
