import { Link } from 'react-router-dom';
import emptyFavoritesImage from '@/assets/icon/Clapperboard.svg';
import { Button } from '@/components/ui/button';

export default function FavoritesEmptyState() {
  return (
    <div
      className="
        px-11.5
        pt-21
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-3xl
      "
    >
      <div
        className="
          flex
          h-32
          w-32
          items-center
          justify-center
          rounded-full
          gap-lg
        "
      >
        <img
          src={emptyFavoritesImage}
          alt="Empty Favorites"
          className="
            h-50
            w-50
            
          "
        />
      </div>

      <h2
        className="
          text-md
          leading-md
          font-bold
          text-neutral-25
        "
      >
        Data Empty
      </h2>

      <p
        className="
          text-sm
          leading-sm
          text-neutral-400
        "
      >
        You don't have a favorite movie yet
      </p>

      <Button
        asChild
        variant="movie"
        className="
          mt-6
          py-2
          px-12.75
        "
      >
        <Link to="/">
          <div
            className="
          text-sm
          leading-sm
          font-semibold
          font-primary"
          >
            Explore Movie
          </div>
        </Link>
      </Button>
    </div>
  );
}
