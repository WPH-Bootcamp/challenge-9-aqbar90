import type { CastMember } from '../types/movie';

interface CastSectionProps {
  cast: CastMember[];
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

export default function CastSection({ cast }: CastSectionProps) {
  return (
    <section className="mt-12">
      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        Cast & Crew
      </h2>

      <div
        className="
          mt-6
          grid
          gap-4
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {cast.slice(0, 6).map((person) => (
          <div
            key={person.id}
            className="
              flex
              items-center
              gap-3
            "
          >
            <img
              src={
                person.profile_path
                  ? `${IMAGE_BASE_URL}${person.profile_path}`
                  : '/placeholder-avatar.png'
              }
              alt={person.name}
              className="
                h-14
                w-14
                rounded-lg
                object-cover
              "
            />

            <div>
              <h3
                className="
                  font-medium
                  text-white
                "
              >
                {person.name}
              </h3>

              <p
                className="
                  text-sm
                  text-neutral-400
                "
              >
                {person.character}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
