import type { CastMember } from '../../types/movie';

interface CastSectionProps {
  cast: CastMember[];
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w185';

export default function CastSection({ cast }: CastSectionProps) {
  return (
    <section
      className="
        mt-12 
        lg:mb-37.25
       "
    >
      <h2
        className="
          text-xl
          leading-xl
          font-primary
          font-bold
          text-neutral-25
          lg:text-display-md
          lg:leading-display-md
          lg:tracking-md
          
        "
      >
        Cast & Crew
      </h2>

      <div
        className="
          mt-4
          grid
          gap-4
          md:grid-cols-2
          lg:grid-cols-3
          lg:mt-6
          lg:gap-5xl
        "
      >
        {cast.slice(0, 6).map((person) => (
          <div
            key={person.id}
            className="
              flex
              items-center
              gap-xl
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
                h-21
                w-13.75
                rounded-md
                object-cover
                lg:h-24
                lg:w-17.25
              "
            />

            <div>
              <h3
                className="
                  text-sm
                  leading-sm
                  font-primary
                  font-semibold
                  text-neutral-25
                  lg:text-md
                  lg:leading-md

                "
              >
                {person.name}
              </h3>

              <p
                className="
                  text-sm
                  leading-sm
                  font-regular
                  font-primary
                  text-neutral-400
                  lg:text-md
                  lg:leading-md
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
