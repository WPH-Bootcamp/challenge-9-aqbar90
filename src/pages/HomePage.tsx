import { useTrendingMovies } from '@/features/movies/hooks/useTrendingMovies';
import HeroBanner from '@/features/movies/components/HeroBanner';
import TrendingSection from '@/features/movies/components/TrendingSection';

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
      <TrendingSection />
    </>
  );
};

export default HomePage;
