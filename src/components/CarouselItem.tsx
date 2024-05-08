import Image from "next/image";
import Tag from "./Tag";
import Button from "./Button";
import { FilmType } from "@/types/FilmType";

export default function CarouselItem({ filmData }: { filmData: FilmType }) {
  return (
    <div className="embla__slide cursor-grab">
      <div className="w-full max-md:p-4">
        <div className="w-full max-md:h-[500px] h-[788px] relative rounded overflow-hidden">
          <Image
            src="/image/baseball-1.jpg"
            alt="slide-image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="absolute max-md:bottom-0 max-md:h-[260px] max-md:bg-gradient-to-t max-md:from-blue-custom max-md:from-70% max-md:w-full max-md:justify-center max-md:px-8 bg-gradient-to-r from-blue-custom from-40% w-3/4 h-[788px] md:z-10 justify-center flex-col flex px-12">
            <h1 className="text-white md:text-[42px] font-semibold">
              {filmData?.title}
            </h1>
            <div className="md:hidden flex py-3">
              <Tag label={filmData?.release_date.substring(0, 4)} />
              <Tag label="2h 33m" />
              <Tag label="Action" />
            </div>
            <p className="line-clamp-3 text-xs max-md:hidden md:w-[418px] py-4">
              {filmData?.release_date.substring(0, 4)} | 2H 23m
            </p>
            <p className="line-clamp-3 max-md:text-xs md:w-[418px]">
              {filmData?.opening_crawl}
            </p>
            <div className="flex">
              <Button
                icon={
                  <Image
                    src="/svg/play.svg"
                    alt="play"
                    width={12}
                    height={16}
                  />
                }
                label="Play"
                className="bg-yellow-custom md:mt-4 mt-3 mr-3"
                textColor="text-dark-blue"
              />
              <Button
                icon={
                  <Image
                    src="/svg/share.svg"
                    alt="share"
                    width={12}
                    height={13}
                  />
                }
                label="Share"
                className="border-2 border-yellow-custom md:hidden md:mt-4 mt-3"
                textColor="text-yellow-custom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
