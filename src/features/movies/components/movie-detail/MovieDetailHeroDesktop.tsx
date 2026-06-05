import { CalendarDays, Heart, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { MovieDetail } from '../../types/movie';

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
          gap-xl
          mt-55
          bg-linear-to-t
          from-background
          via-black/70
          to-black/5
          px-11xl
          pt-36
          pb-20
        "
      >
        <div
          className="
            flex
            items-start
            gap-4xl
          "
        >
          {/* Poster */}
          <img
            src={`${POSTER_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="
              rounded-xl
              object-cover
              h-96
              w-65
            "
          />

          {/* Content */}
          <div className="flex flex-1 flex-col gap-3xl">
            <h1
              className="
                font-primary
                font-bold
                text-neutral-25
                text-display-xl
                leading-display-2xl
                tracking-display
              "
            >
              {movie.title}
            </h1>

            <div
              className="
                flex
                items-center
                gap-md
                text-md
                font-regular
                leading-md
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

            {/* Actions */}
            <div
              className="
            flex
            items-center
            gap-xl
          "
            >
              <Button
                variant="movie"
                className="
                  px-9.75
                  h-13
                  rounded-full
                  "
              >
                Watch Trailer
                <span
                  className="
                flex
                h-5
                w-5
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

              <Button
                variant="outline"
                size="icon"
                className="
                  h-13
                  w-13
                  shrink-0
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  backdrop-blur-md
                  hover:bg-black/50
                  hover:border-white/40
                "
              >
                <Heart className=" size-6 " />
              </Button>
            </div>

            {/* Stats */}
            <div
              className="
            grid
            grid-cols-3
            gap-2xl
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
                      h-7.5
                      w-7.5
                      ${stat.className ?? ''}
                    `}
                      />
                    ) : (
                      <img
                        src={stat.icon}
                        alt={stat.label}
                        className="
                      h-7.5
                      w-7.5
                    "
                      />
                    )}

                    <span
                      className="
                    mt-2.25
                    text-md
                    leading-md
                    font-regular
                    font-primary
                    text-neutral-300
                  "
                    >
                      {stat.label}
                    </span>

                    <span
                      className="
                    text-xl
                    leading-xl
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
        </div>
      </div>
    </section>
  );
}
