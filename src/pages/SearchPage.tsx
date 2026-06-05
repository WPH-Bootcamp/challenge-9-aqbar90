import { useSearchParams } from 'react-router-dom';

import SearchResults from '@/features/movies/components/search/SearchResults';
import { useSearchMovies } from '@/features/movies/hooks/useSearchMovies';

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q') ?? '';

  const { data, isLoading } = useSearchMovies(query);

  const movies = data?.results ?? [];

  return (
    <section
      className="
        px-4
        py-12

        lg:px-11xl
        lg:py-20
      "
    >
      <h1
        className="
          mb-2
          text-display-xs
          font-bold
          text-neutral-25
        "
      >
        Search Results
      </h1>

      <p
        className="
          mb-8
          text-neutral-400
        "
      >
        Results for "{query}"
      </p>

      {isLoading ? <div>Loading...</div> : <SearchResults movies={movies} />}
    </section>
  );
}
