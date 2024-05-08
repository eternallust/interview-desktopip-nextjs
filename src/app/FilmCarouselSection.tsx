"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CarouselItem from "@/components/CarouselItem";
import { FilmListResponseType, FilmType } from "@/types/FilmType";
import { DotButton, useDotButton } from "@/components/DotButton";
import classnames from "classnames";

export default function FilmCarouselSection({
  data,
}: {
  data: FilmListResponseType;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const handleDotClick = useCallback(
    (index: number) => {
      onDotButtonClick(index);
    },
    [onDotButtonClick]
  );

  return (
    <section
      id="film-banner"
      className="embla w-full max-md:h-[500px] h-[788px] relative"
      ref={emblaRef}
    >
      <div className="embla__container">
        {data?.results.map((item: FilmType) => (
          <CarouselItem key={item.episode_id} filmData={item} />
        ))}
      </div>
      <div className="embla__dots absolute bottom-14 left-14 max-md:hidden">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => handleDotClick(index)}
            className={classnames("bg-grey-custom h-4 w-4 rounded-full mr-3", {
              "bg-yellow-custom": index === selectedIndex,
            })}
          />
        ))}
      </div>
    </section>
  );
}
