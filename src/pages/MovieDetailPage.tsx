import { useParams } from 'react-router-dom';
import { useMovieDetail } from '@/features/movies/hooks/useMovieDetail';
import { useMovieCredits } from '@/features/movies/hooks/useMovieCredits';
import MovieDetailHero from '@/features/movies/components/MovieDetailHero';
import CastSection from '@/features/movies/components/CastSection';

export default function MovieDetailPage() {
  const { id } = useParams();

  const movieId = Number(id);

  const { data: movie } = useMovieDetail(movieId);

  const { data: credits } = useMovieCredits(movieId);

  if (!movie) return null;

  return (
    <>
      <MovieDetailHero movie={movie} />

      <section
        className="
          px-4
          pb-12
          lg:px-11xl
        "
      >
        <div className="mt-8">
          <h2
            className="
              text-xl
              font-bold
              text-white
            "
          >
            Overview
          </h2>

          <p
            className="
              mt-4
              text-sm
              leading-7
              text-neutral-400
            "
          >
            {movie.overview}
          </p>
        </div>

        <CastSection cast={credits?.cast ?? []} />
      </section>
    </>
  );
}
