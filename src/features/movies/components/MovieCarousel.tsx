import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

import type { Movie } from '../types/movie';
import MovieCard from './MovieCard';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MovieCarouselProps {
  movies: Movie[];
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'start',
        dragFree: true,
      }}
    >
      <CarouselContent className="w-full relative -ml-4">
        {movies.map((movie, index) => (
          <CarouselItem
            key={movie.id}
            className="
              pl-4
              gap-xl
              basis-45
              md:basis-50
              lg:basis-50
            "
          >
            <MovieCard
              key={movie.id}
              rank={index + 1}
              title={movie.title}
              posterPath={movie.poster_path!}
              rating={movie.vote_average}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Desktop Only */}

      <AnimatePresence>
        {canScrollPrev && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <CarouselPrevious
              className="
                left-2
                top-1/2
                -translate-y-1/2
                lg:flex
                h-8
                w-8
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-10
          hidden
          lg:block
          h-full
          w-40
          bg-linear-to-l
          from-background
          via-background/60
          to-transparent
        "
      />
      {canScrollNext && (
        <CarouselNext
          className="
          lg:flex
          z-20
          -right-2
          top-[40%]
          -translate-y-1/2
          h-8
          w-8
        "
        />
      )}
    </Carousel>
  );
}
