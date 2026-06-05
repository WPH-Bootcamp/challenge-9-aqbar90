import { useParams } from 'react-router-dom';
import { useMovieDetail } from '@/features/movies/hooks/useMovieDetail';
import { useMovieCredits } from '@/features/movies/hooks/useMovieCredits';
import MovieDetailHero from '@/features/movies/components/movie-detail/MovieDetailHero';
import CastSection from '@/features/movies/components/movie-detail/CastSection';

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
        <div>
          <h2
            className="
              text-xl
              leading-xl
              font-primary
              font-bold
              text-neutral-25
              lg:text-display-md
              lg:leading-display-md
              lg:tracking-display
            "
          >
            Overview
          </h2>

          <p
            className="
              mt-2
              text-sm
              leading-sm
              font-regular
              font-primary
              text-neutral-400
              lg:text-md
              lg:leading-md

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
