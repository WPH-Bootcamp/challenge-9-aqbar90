import { CalendarDays, Heart, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { MovieDetail } from '../../types/movie';
import videoIcon from '@/assets/icon/video.svg';
import happySmileIcon from '@/assets/icon/emoji-happy.svg';

import { useFavorites } from '@/features/movies/hooks/useFavorites';
import { showFavoriteToast } from '@/lib/toast';
import { useMovieVideos } from '../../hooks/useMovieVideos';

interface MovieDetailHeroProps {
  movie: MovieDetail;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieDetailHero({ movie }: MovieDetailHeroProps) {
  const stats = [
    {
      icon: Star,
      label: 'Rating',
      value: `${movie.vote_average.toFixed(1)}/10`,
      type: 'lucide',
      className: 'text-yellow-400 fill-yellow-400',
    },
    {
      icon: videoIcon,
      label: 'Genre',
      value: movie.genres?.[0]?.name ?? '-',
      type: 'svg',
    },
    {
      icon: happySmileIcon,
      label: 'Age Limit',
      value: movie.adult ? '18+' : '13',
      type: 'svg',
    },
  ] as const;

  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(movie.id);

  const handleFavorite = () => {
    const added = toggleFavorite(movie.id);

    showFavoriteToast(added ? 'Success Add to Favorites' : 'Removed from Favorites');
  };

  const { data: videos } = useMovieVideos(movie.id);

  const trailer = videos?.results.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  );

  return (
    <section className="relative overflow-hidden">
      {/* BACKDROP */}

      <picture>
        <source media="(min-width:480px)" srcSet={`${IMAGE_BASE_URL}${movie.backdrop_path}`} />

        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="
          absolute
          inset-0
          h-full
          w-full
          object-center
        "
        />
      </picture>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black
          via-black/80
          to-black/20
        "
      />

      <div
        className="
          relative
          z-10
          px-4
          pt-24
          pb-10
          gap-xl
          mt-55
          bg-linear-to-t
          from-background
          via-black/70
          to-black/5
        "
      >
        <div
          className="
            flex
            items-start
            gap-4
          "
        >
          {/* Poster */}
          <img
            src={`${POSTER_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="
              h-44
              w-28
              rounded-xl
              object-cover
            "
          />

          {/* Content */}
          <div className="flex flex-1 flex-col">
            <h1
              className="
                text-xl
                leading-xl
                font-primary
                font-bold
                text-neutral-25
              "
            >
              {movie.title}
            </h1>

            <div
              className="
                mt-1
                flex
                items-center
                gap-1
                text-sm
                font-regular
                leading-sm
                font-primary
                text-neutral-300
              "
            >
              <CalendarDays size={16} />

              <span>
                {new Date(movie.release_date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-xl
          "
        >
          {trailer && (
            <Button
              variant="movie"
              onClick={() =>
                window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank')
              }
              className="
              flex-1
              h-11
              rounded-full"
            >
              Watch Trailer
              <span
                className="
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                bg-white
                text-red-700
                "
              >
                <Play
                  className="
                    size-2.5
                    fill-current
                  "
                />
              </span>
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            onClick={handleFavorite}
            className="
              h-11
              w-11
              shrink-0
              rounded-full
              border
              border-white/20
              bg-black/30
              backdrop-blur-md
            "
          >
            <Heart
              className={`
                h-5
                w-5
                transition-colors
                ${favorite ? 'fill-red-800 text-red-800' : 'text-white'}
              `}
            />
          </Button>
        </div>

        {/* Stats */}
        <div
          className="
            mt-6
            grid
            grid-cols-3
            gap-3
          "
        >
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="
                  flex
                  h-34
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-neutral-800
                  bg-black/40
                  backdrop-blur-sm
                "
              >
                {stat.type === 'lucide' ? (
                  <stat.icon
                    className={`
                      h-6
                      w-6
                      ${stat.className ?? ''}
                    `}
                  />
                ) : (
                  <img
                    src={stat.icon}
                    alt={stat.label}
                    className="
                      h-6
                      w-6
                    "
                  />
                )}

                <span
                  className="
                    mt-2.25
                    text-xs
                    leading-xs
                    font-regular
                    font-primary
                    text-neutral-300
                  "
                >
                  {stat.label}
                </span>

                <span
                  className="
                    text-lg
                    leading-lg
                    font-primary
                    font-bold
                    text-neutral-25
                  "
                >
                  {stat.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
