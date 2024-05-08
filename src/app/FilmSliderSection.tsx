"use client";

import React from "react";
import { FilmListResponseType } from "@/types/FilmType";
import FilmSlider from "@/components/FilmSlider";

export default function FilmSliderSection({
  data,
}: {
  data: FilmListResponseType;
}) {
  return (
    <section id="films" className="my-10 md:mx-8 max-md:mx-4	">
      <FilmSlider data={data} />
      <FilmSlider data={data} />
    </section>
  );
}
