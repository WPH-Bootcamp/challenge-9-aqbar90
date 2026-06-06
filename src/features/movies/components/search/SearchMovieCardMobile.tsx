import { Heart, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Movie } from '../../types/movie';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/features/movies/hooks/useFavorites';
import { showFavoriteToast } from '@/lib/toast';

interface SearchMovieCardProps {
  movie: Movie;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function SearchMovieCardMobile({ movie }: SearchMovieCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(movie.id);

  const handleFavorite = () => {
    const added = toggleFavorite(movie.id);

    showFavoriteToast(added ? 'Success Add to Favorites' : 'Removed from Favorites');
  };

  return (
    <div
      key={movie.id}
      className="
              border-b
              border-neutral-800
              pb-8
            "
    >
      <div
        className="
                flex
                items-start
                gap-3xl
              "
      >
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="
                  h-39
                  w-26
                  rounded-md
                  object-cover
                "
          />
        </Link>

        <div
          className="
                flex-1        
              "
        >
          <Link to={`/movie/${movie.id}`}>
            <h3
              className="
                    text-md
                    leading-md
                    font-primary
                    font-bold
                    text-neutral-25
                  "
            >
              {movie.title}
            </h3>
          </Link>

          <div
            className="
                  mt-1
                  text-sm
                  font-medium
                  leading-sm
                  flex
                  items-center
                  gap-1
                  text-yellow-400
                "
          >
            <Star
              size={14}
              className="
                    fill-current
                  "
            />

            <span>
              {movie.vote_average.toFixed(1)}
              /10
            </span>
          </div>

          <p
            className="
                  mt-1
                  text-sm
                  leading-sm
                  font-regular
                  text-neutral-400
                  line-clamp-2
                "
          >
            {movie.overview}
          </p>
        </div>
      </div>
      <div
        className="
                  mt-6
                  items-center
                  gap-xl
                  flex
                "
      >
        <Button
          variant="movie"
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
    </div>
  );
}
