import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Movie } from '../types/movie';
import type { ReactNode } from 'react';

interface HeroBannerProps {
  movie: Movie;
  children?: ReactNode;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

export default function HeroBanner({ movie, children }: HeroBannerProps) {
  return (
    <section
      className="
        -translate-y-25
        relative
        h-full
        max-w-screen
        overflow-hidden
      "
    >
      {/* BACKDROP */}

      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover-down
          
        "
      />

      {/* HERO GRADIENT */}
      <div
        className="
          absolute
          inset-0
        "
      />

      {/* NAVBAR */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          z-20
        "
      >
        {children}
      </div>

      {/* CONTENT */}
      <div
        className="
          px-4
          pt-55.75
          relative
          z-10
          flex
          min-h-dvh
          min-w-full
          items-end
          bg-linear-to-t
          from-black
          via-black/70
          to-black/10
          md:pl-8xl
          md:pb-50
          lg:pt-74.5
          lg:pb-61.5
          lg:pl-11xl
          lg:pr-166.25
          lg:items-center
          
        "
      >
        <div>
          <h1
            className="
              text-neutral-25
              font-primary
              font-bold
              text-display-xs
              tracking-display
              leading-display-xs
              md:text-display-lg
              lg:text-display-2xl
              lg:leading-display-2xl
            "
          >
            {movie.title}
          </h1>
          <p
            className="
              mt-4
              text-neutral-400
              text-sm
              font-primary
              font-regular
              leading-sm
              lg:text-md
              lg:leading-md
              lg:w-158.75
            "
          >
            {movie.overview}
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              gap-xl
              sm:flex-row
            "
          >
            <Button variant="movie" size="hero">
              Watch Trailer
              <span
                className="
                  ml-2
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

            <Button variant="movieOutline" size="heroOutline">
              See Detail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
