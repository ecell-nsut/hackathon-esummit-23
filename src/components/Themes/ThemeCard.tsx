import { Bungee_Inline } from "@next/font/google";
import Image from "next/image";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

type Props = {
  name: string;
  src: string;
};

const ThemeCard = (props: Props) => {
  return (
    <div
      className="w-[300px]   grid place-items-center rounded-2xl aspect-[12/16] hover:transform-none hover:contrast-100 contrast-125"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(2,0,36,1) 3%, rgba(9,9,121,0) 100%),linear-gradient(221deg, rgba(212,140,241,1) 0%, rgba(15,219,237,1) 100%)",
      }}
    >
      <div className=" aspect-square flex flex-col items-center gap-3">
        <span className="icon">
          <Image width={130} height={130} src={props.src} alt="" />
        </span>
        <span
          className={`${bungee.className} text-4xl text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
        >
          {props.name}
        </span>
      </div>
    </div>
  );
};

export default ThemeCard;
