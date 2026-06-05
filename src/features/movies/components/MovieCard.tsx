import { Star } from 'lucide-react';
import MovieRankBadge from './MovieRankBadge';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  rank?: number;
  title: string;
  posterPath: string;
  rating: number;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ id, rank, title, posterPath, rating }: MovieCardProps) {
  return (
    <Link to={`/movie/${id}`} className="block">
      <article
        className="
        group
        shrink-0
        cursor-pointer
        gap-md
      "
      >
        <div
          className="
          relative
          overflow-hidden
          rounded-md
        "
        >
          {rank !== undefined && <MovieRankBadge rank={rank} />}

          <img
            src={`${IMAGE_BASE_URL}${posterPath}`}
            alt={title}
            className="
            h-66.5
            md:h-65
            lg:h-67.5
            w-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
          />
        </div>

        <h3
          className="
          mt-2
          line-clamp-2
          text-md
          leading-md
          font-semibold
          text-neutral-25
          lg:text-lg
          lg:leading-lg
        "
        >
          {title}
        </h3>

        <div
          className="
          flex
          items-center
          gap-xs
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
            leading-sm
            font-regular
            lg:text-md
            lg:leading-md
            text-neutral-400
          "
          >
            {rating.toFixed(1)}/10
          </span>
        </div>
      </article>
    </Link>
  );
}
