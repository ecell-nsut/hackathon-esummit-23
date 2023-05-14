// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Bungee_Inline } from "@next/font/google";
import { A11y, Autoplay, Navigation } from "swiper";
import { SwiperButtonNxt, SwiperButtonPre } from "./SwiperButton";
import ThemeCard from "./ThemeCard";
import tracks from "../../data/tracks";
import { TrackInfoProps } from "../../types";
import Link from "next/link";
import { useEffect } from "react";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });
type Props = {};

const ThemesSection = (props: Props) => {
  return (
    <div className="min-h-screen m-auto flex flex-col py-10 px-4" id="tracks">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text mb-32`}
      >
        Themes
      </h1>
      <div className="w-full px-4">
        <Swiper
          loop={true}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          breakpoints={{
            100: {
              slidesPerView: 1,
            },
            649: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            859: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1259: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation, A11y]}
          className="mySwiper "
        >
          <div className=" absolute z-10 top-0 left-0 h-full flex">
            <SwiperButtonPre className={"w-[60px]"} />
          </div>
          <div className=" absolute z-10 top-0 right-0 h-full flex">
            <SwiperButtonNxt className={"w-[60px]"} />
          </div>
          {tracks.map((sld: TrackInfoProps, i: any) => {
            return (
              <SwiperSlide key={i}>
                <Link href={`/tracks/${sld.slug}`}>
                  <div className="flex justify-center">
                    <ThemeCard src={sld.image} name={sld.title} />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex w-full justify-betwen flex-wrap items-center gap-20 justify-center"></div>
    </div>
  );
};

export default ThemesSection;
