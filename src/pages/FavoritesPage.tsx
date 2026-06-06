import FavoriteMovieList from '@/features/movies/components/favorites/FavoriteMovieList';
import { useFavoriteMovies } from '@/features/movies/hooks/useFavoriteMovies';
import { useFavorites } from '@/features/movies/hooks/useFavorites';
import FavoritesEmptyState from '@/features/movies/components/favorites/FavoriteEmptyState';

export default function FavoritesPage() {
  const favoriteMovies = useFavoriteMovies();

  const { toggleFavorite } = useFavorites();

  const handleRemoveFavorite = (id: number) => {
    toggleFavorite(id);
  };

  if (favoriteMovies.length === 0) {
    return (
      <section
        className="
        container
        mx-auto
        px-4
        pt-21
        pb-44.5
      "
      >
        <h1
          className="
          mb-8
          text-display-xs
          font-bold
        "
        >
          Favorites
        </h1>

        <FavoritesEmptyState />
      </section>
    );
  }

  if (favoriteMovies.length === 0) {
    return (
      <section
        className="
        px-4
        py-12
        lg:px-11xl
        lg:py-20
      "
      >
        <h1
          className="
          mb-8
          text-display-xs
          font-bold
          text-neutral-25
        "
        >
          Favorites
        </h1>

        <FavoriteMovieList movies={favoriteMovies} onRemove={handleRemoveFavorite} />
      </section>
    );
  }
}
