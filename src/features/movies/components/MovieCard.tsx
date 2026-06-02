import { IMAGE_BASE_URL } from '@/lib/constants';

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
}

const MovieCard = ({ title, posterPath, rating }: MovieCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        bg-neutral-900
      "
    >
      <img
        src={`${IMAGE_BASE_URL}/w500${posterPath}`}
        alt={title}
        className="
          aspect-2/3
          w-full
          object-cover
        "
      />
      <div className="p-4">
        <h3
          className="
            line-clamp-2
            font-semibold
            text-white
          "
        >
          {title}
        </h3>
        <p
          className="
            mt-2
            text-sm
            text-yellow-400
          "
        >
          ⭐ {rating.toFixed(1)}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
