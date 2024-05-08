"use client";

import FilmCarouselSection from "./FilmCarouselSection";
import FilmSliderSection from "./FilmSliderSection";
import Footer from "../components/Footer";
import { useFilms } from "@/hooks/useFilms";

export default function Home() {
  const { data, isLoading } = useFilms();
  return (
    <div>
      {!isLoading && (
        <>
          <FilmCarouselSection data={data} />
          <FilmSliderSection data={data} />
          <Footer name="Luke Skywalker" />
        </>
      )}
    </div>
  );
}
