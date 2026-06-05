import type { MovieDetail } from '../../types/movie';
import MovieDetailHeroMobile from './MovieDetailHeroMobile';
import MovieDetailHeroDesktop from './MovieDetailHeroDesktop';

interface Props {
  movie: MovieDetail;
}

export default function MovieDetailHero({ movie }: Props) {
  return (
    <>
      <div className="lg:hidden">
        <MovieDetailHeroMobile movie={movie} />
      </div>

      <div className="hidden lg:block">
        <MovieDetailHeroDesktop movie={movie} />
      </div>
    </>
  );
}
