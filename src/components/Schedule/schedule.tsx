import { Bungee_Inline } from "@next/font/google";
import Image from "next/image";
import day1 from "/public/Images/schedule/day1.svg";
import day2 from "/public/Images/schedule/day2.svg";
const bungee=Bungee_Inline({ subsets: ["latin"], weight: "400" });

type Props={};

const Schedule=(props: Props) => {
  return (
    <div className="max-w-7xl m-auto pt-20 min-h-screen" id="timeline">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        Schedule
      </h1>

      <div className="max-w-3xl flex flex-col m-auto justify-center items-center px-8 space-y-48">

        <Image src={day1} alt="day 1" />
        <Image src={day2} alt="day 2" />

      </div>
    </div>
  );
};

export default Schedule;
