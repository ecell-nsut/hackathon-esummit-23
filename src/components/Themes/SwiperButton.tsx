import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useSwiper } from "swiper/react";

const SwiperButtonNxt = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="flex flex-col justify-center z-10  h-full bg-gradient-to-l from-transparent to-slate-400 px-2 opacity-10 transition-[opacity] lg:opacity-20 duration-150  left-0 hover:opacity-60"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <div className="z-10 h-full w-full flex justify-center flex-col hover:scale-105 hover:cursor-pointer ">
          <BsChevronCompactRight className="text-white text-5xl" />
        </div>
      </div>
    </div>
  );
};
const SwiperButtonPre = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="flex flex-col justify-center z-10  h-full bg-gradient-to-r from-transparent to-slate-400 px-2 opacity-10 lg:opacity-20 transition-[opacity] duration-150  left-0 hover:opacity-60"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <div className="z-10 h-full w-full flex justify-center flex-col hover:scale-105 hover:cursor-pointer ">
          <BsChevronCompactLeft className="text-white text-5xl" />
        </div>
      </div>
    </div>
  );
};

export { SwiperButtonNxt, SwiperButtonPre };
