import { CalendarDays, Heart, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { MovieDetail } from '../types/movie';
import videoIcon from '@/assets/icon/video.svg';
import happySmileIcon from '@/assets/icon/emoji-happy.svg';

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
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop */}
      <img
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

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
          lg:px-11xl
          lg:pt-36
          lg:pb-20
        "
      >
        {/* MOBILE FIRST */}
        <div
          className="
            flex
            items-start
            gap-4

            lg:flex-row
            lg:items-end
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
              lg:h-72
              lg:w-52
            "
          />

          {/* Content */}
          <div className="flex-1">
            <h1
              className="
                text-3xl
                font-bold
                text-white
                lg:text-5xl
              "
            >
              {movie.title}
            </h1>

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
                text-sm
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
            gap-3
          "
        >
          <Button variant="movie" size="hero">
            Watch Trailer
            <Play
              className="
                ml-2
                h-4
                w-4
                fill-current
              "
            />
          </Button>

          <Button variant="outline" size="icon">
            <Heart className=" size-5 h-4 w-4" />
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
                    mt-3
                    text-sm
                    text-neutral-400
                  "
                >
                  {stat.label}
                </span>

                <span
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-white
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
