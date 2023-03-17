import { Bungee_Inline } from "@next/font/google";
import ThemeCard from "./ThemeCard";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });
type Props = {};

const ThemesSection = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto flex flex-col py-10 px-4">
      <h1
        className={`${bungee.className} text-center my-12 text-4xl md:text-6xl    text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        Themes
      </h1>
      <div className="flex w-full justify-betwen flex-wrap items-center gap-20 justify-center">
        <ThemeCard src="/Images/ai.svg" name="AI" />
        <ThemeCard src="/Images/ML.svg" name="ML" />
        <ThemeCard src="/Images/iot.svg" name="iot" />
      </div>
    </div>
  );
};

export default ThemesSection;
