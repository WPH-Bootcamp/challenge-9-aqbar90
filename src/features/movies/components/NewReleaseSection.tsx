import { useEffect, useState } from 'react';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';

import NewReleaseGrid from './NewReleaseGrid';
import LoadMoreButton from './LoadMoreButton';

export default function NewReleaseSection() {
  const { data, isLoading } = useNowPlayingMovies();

  const getInitialVisibleCount = () => {
    const width = window.innerWidth;

    if (width >= 1024) return 15; // Desktop
    if (width >= 768) return 12; // Tablet

    return 8; // Mobile
  };

  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getInitialVisibleCount());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLoadMore = () => {
    const width = window.innerWidth;

    if (width >= 1024) {
      setVisibleCount((prev) => prev + 5);
    } else if (width >= 768) {
      setVisibleCount((prev) => prev + 6);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  if (isLoading) {
    return null;
  }

  const movies = data?.results.slice(0, visibleCount) ?? [];

  return (
    <section
      className="
        px-4
        py-12
        md:px-8
        lg:px-11xl
        lg:py-20
      "
    >
      <h2
        className="
          mb-8
          text-display-xs
          font-bold
          text-neutral-25
          lg:text-display-sm
        "
      >
        New Release
      </h2>

      <NewReleaseGrid movies={movies} />

      {visibleCount < (data?.results.length ?? 0) && <LoadMoreButton onClick={handleLoadMore} />}
    </section>
  );
}
