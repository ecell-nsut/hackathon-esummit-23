import { Bungee_Inline } from "@next/font/google";
import Image from "next/image";
import roadmap from "/public/Images/roadmap.svg";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

type Props = {};

const Schedule = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto pt-20 min-h-screen" id="timeline">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        Schedule
      </h1>

      <div className="max-w-3xl m-auto px-4">
        <Image src={roadmap} alt="rodmap" />
      </div>
    </div>
  );
};

export default Schedule;
