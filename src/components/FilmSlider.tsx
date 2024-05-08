import SliderSlick from "react-slick";
import { FilmListResponseType, FilmType } from "@/types/FilmType";
import Image from "next/image";

export default function FilmSlider({ data }: { data: FilmListResponseType }) {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} max-md:!hidden`}
        style={style}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` ${className} max-md:!hidden`}
        style={style}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <SliderSlick {...settings} className="mb-8">
      {data?.results.map((item: FilmType, index: number) => (
        <div
          key={index}
          className="bg-white text-black gap-2 max-md:h-24 max-lg:h-40 max-2xl:h-48 h-60 relative cursor-grab "
        >
          <Image
            priority
            src="/image/baseball-2.jpg"
            alt="Film Poster"
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute bottom-0 w-full h-2/6 p-4  max-md:pb-6 bg-gradient-to-t from-dark-blue flex items-center">
            <p className="md:text-xl max-md:text-[10px] font-bold text-white">
              {item.title}
            </p>
            <div className="bg-yellow-custom md:h-6 h-4 md:px-2 px-1 rounded text-blue-custom flex justify-center items-center md:text-xs text-[10px] ml-2 font-bold">
              Exclusive
            </div>
          </div>
        </div>
      ))}
    </SliderSlick>
  );
}
