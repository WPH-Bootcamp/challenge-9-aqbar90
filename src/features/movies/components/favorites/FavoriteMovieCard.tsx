import { Heart, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { MovieDetail } from '../../types/movie';

interface FavoriteMovieCardProps {
  movie: MovieDetail;
  onRemove: (id: number) => void;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function FavoriteMovieCard({ movie, onRemove }: FavoriteMovieCardProps) {
  return (
    <article
      className="
        flex
        flex-col
        gap-4
        border-b
        border-neutral-800
        pb-6
        md:flex-row
        md:items-start
      "
    >
      {/* Poster */}
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="
          h-48
          w-32
          rounded-xl
          object-cover
          md:h-40
          md:w-24
        "
      />

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h2
          className="
            text-lg
            font-bold
            text-neutral-25
          "
        >
          {movie.title}
        </h2>

        <div
          className="
            mt-1
            flex
            items-center
            gap-1
          "
        >
          <Star
            className="
              h-4
              w-4
              fill-yellow-400
              text-yellow-400
            "
          />

          <span
            className="
              text-sm
              text-neutral-300
            "
          >
            {movie.vote_average.toFixed(1)}/10
          </span>
        </div>

        <p
          className="
            mt-3
            line-clamp-2
            text-sm
            text-neutral-400
          "
        >
          {movie.overview}
        </p>

        <div
          className="
            mt-4
            flex
            items-center
            gap-3
          "
        >
          <Button variant="movie" className="h-9">
            Watch Trailer
            <Play
              className="
                ml-1
                h-3
                w-3
                fill-current
              "
            />
          </Button>
        </div>
      </div>

      {/* Favorite */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onRemove(movie.id)}
        className="
          shrink-0
          rounded-full
          border
          border-white/20
          bg-black/30
        "
      >
        <Heart
          className="
            h-4
            w-4
            fill-red-600
            text-red-600
          "
        />
      </Button>
    </article>
  );
}
