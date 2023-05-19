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

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });
type Props = {};

const ThemesSection = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center px-4 py-10 m-auto mb-8 min-h-screen"
      id="tracks"
    >
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text mb-32`}
      >
        Themes
      </h1>
      <div className="flex flex-wrap gap-16 justify-center items-center px-4 w-full">
        {tracks
          .filter((track) => !track.sponsoredTrack)
          .map((sld: TrackInfoProps & { image: JSX.Element }, i: any) => (
            <Link
              href={`/tracks/${sld.slug}`}
              key={i}
              style={{ marginLeft: 0 }}
            >
              <ThemeCard src={sld.image} name={sld.title} />
            </Link>
          ))}
        {/* <Swiper
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
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            1650: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation, A11y]}
          className="mySwiper"
        >
          <div className="flex absolute top-0 left-0 z-10 h-full">
            <SwiperButtonPre className={"w-[60px]"} />
          </div>
          <div className="flex absolute top-0 right-0 z-10 h-full">
            <SwiperButtonNxt className={"w-[60px]"} />
          </div>
          {tracks.map((sld: TrackInfoProps & { image: JSX.Element }, i: any) => {
            if(sld.sponsoredTrack){
              return null;
            }
            return (
              <SwiperSlide key={i}>
                <Link href={`/tracks/${sld.slug}`}>
                  <div className='flex justify-center'>
                    <ThemeCard src={sld.image} name={sld.title} />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </div>
      <div className="flex flex-wrap gap-20 justify-center items-center w-full justify-betwen"></div>
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text mb-32`}
      >
        Sponsored Tracks
      </h1>
      <div className="flex flex-wrap gap-16 justify-center items-center space-y-4 sm:space-y-0 sm:space-x-32 max-w-[1200px]">
        {tracks.map((sld: TrackInfoProps & { image: JSX.Element }, i: any) => {
          if (!sld.sponsoredTrack) {
            return null;
          }
          return (
            <Link
              href={`/tracks/${sld.slug}`}
              key={i}
              style={{ marginLeft: 0 }}
            >
              <ThemeCard src={sld.image} name={sld.title} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ThemesSection;
