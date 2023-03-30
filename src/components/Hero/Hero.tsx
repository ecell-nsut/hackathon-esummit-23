type Props = {};
import { Bungee_Inline, Orbitron } from "@next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import { BsDiscord } from "react-icons/bs";
import HeroImg from "/public/Images/HeroImage.svg";
import BgLogo from "/public/Images/logo.svg";
const orbitron = Orbitron({ subsets: ["latin"] });
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

const Hero = (props: Props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="max-w-7xl m-auto  min-h-[60vh] flex justify-between items-center p-4 flex-col sm:flex-row my-12 gap-10">
      <div
        className={`content ${orbitron.className} text-[57px] leading-[58px] md:text-[60px] md:leading-[60px] lg:text-[82px] text-7xl lg:leading-[82px] font-extrabold text-teal-500 `}
      >
        <div className="innerContent flex flex-col items-start ">
          Welcome <br />
          To <br />
          <span className="text-white">
            {" "}
            Hack-a- <br /> preneur
          </span>
          <button
            className="font-sans flex items-center justify-center gap-2 bg-[#5c35d156] w-full text-white text-lg font-medium
           rounded-full px-3 py-1 mt-8 hover:shadow-md hover:shadow-[#9179da56] active:shadow-none "
          >
            <BsDiscord />
            Join Discord{" "}
          </button>
          <div className="flex items-center justify-center gap-2 rounded-full px-3 py-1 mt-8 hover:shadow-md hover:shadow-[#9179da56] active:shadow-none h-[35px] overflow-hidden bg-[#B3CEFF] cursor-pointer btnani w-full ">
            <div
              className="apply-button"
              data-hackathon-slug="hackaprenuer"
              data-button-theme="light"
              style={{ height: 40 + "px", width: 312 + "px" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="image   flex justify-center text-center  bg-cover  contrast-[1.1] relative">
        <Image
          src={BgLogo}
          alt=""
          className="absolute w-full h-full opacity-20 scale-110"
        />
        <Image src={HeroImg} alt="hero_image" className="z-10" />
      </div>
    </div>
  );
};

export default Hero;
/*
 <a
            href="https://guide.devfolio.co/organizers/apply-with-devfolio-integration"
            target="_blank"
            className="w-full"
            rel="noreferrer"
          >
            <button
              className="font-sans flex items-center justify-center gap-2 bg-[#2269FB] w-full text-white text-lg font-medium
           rounded-full px-3 apply-button mt-8 hover:shadow-md hover:shadow-[#9179da56] active:shadow-none btnani overflow-hidden"
              data-hackathon-slug="YOUR-HACKATHON-SLUG"
              data-button-theme="light"
            >
              <Image
                src="/Images/devfolioicon-nobg.png"
                width={40}
                height={40}
                className=" "
                alt=""
              />
              Apply With Devfolio{" "}
            </button>
          </a>
*/
