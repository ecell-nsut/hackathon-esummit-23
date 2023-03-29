import { Bungee_Inline } from "@next/font/google";
import Image from "next/image";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });
const sponse = [
  {
    image: "devfolio.svg",
  },
  {
    image: "filecon.svg",
  },
  {
    image: "polygon.svg",
  },
  {
    image: "replit.svg",
  },
  {
    image: "solana.svg",
  },
];
const Sponse = () => {
  return (
    <div className="min-h-[60vh] p-10 md:px-20 lg:px-28 w-full flex flex-col  items-center mb-10">
      <h1
        className={`${bungee.className} text-center  mt-20 mb-10 text-4xl md:text-4xl    text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text  `}
      >
        OUR PARTNERS
      </h1>
      <div className="flex gap-20 flex-col md:flex-row lg:flex-col justify-between w-full">
        <div className="w-full">
          <h1
            className={`${bungee.className} text-center text-2xl md:text-3xl    text-transparent bg-gradient-to-r mb-6 from-[#FFD700] to-[#F8EA8C] bg-clip-text`}
          >
            GOLD SPONSERS
          </h1>
          <div className="flex flex-col justify-center lg:justify-around items-center  lg:flex-row gap-4">
            <div className="max-w-[400px] lg:max-w-[500px] flex justify-center items-center w-full bg-yellow-300 h-[100px] rounded-3xl bg-opacity-[0.07] drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300">
              <Image
                src="/Images/Sponsers/devfolio.svg"
                width={100}
                height={100}
                className="max-w-[300px] w-[70%]"
                alt=""
              />
            </div>
            <div className="max-w-[400px] lg:max-w-[500px] flex justify-center w-full items-center bg-yellow-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300">
              <Image
                src="/Images/Sponsers/polygon.svg"
                width={100}
                height={100}
                className=" max-w-[300px] w-[70%]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <h1
            className={`${bungee.className} text-center text-2xl md:text-3xl    text-transparent bg-gradient-to-r mb-6 from-[#738580] to-[#8A9EA0] bg-clip-text`}
          >
            Silver SPONSERS
          </h1>

          <div className="flex flex-col lg:flex-row w-full ">
            <div className="flex flex-col justify-center lg:justify-between items-center w-full lg:flex-row gap-4">
              <div className="max-w-[400px] flex justify-center w-full items-center bg-slate-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300">
                <Image
                  src="/Images/Sponsers/solana.svg"
                  width={100}
                  height={100}
                  className="max-w-[300px] w-[70%]"
                  alt=""
                />
              </div>
              <div className="max-w-[400px] flex justify-center w-full items-center bg-slate-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300">
                <Image
                  src="/Images/Sponsers/replit.svg"
                  width={100}
                  height={100}
                  className="max-w-[300px] w-[70%]"
                  alt=""
                />
              </div>
              <div className=" max-w-[400px] flex justify-center w-full items-center bg-slate-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300">
                <Image
                  src="/Images/Sponsers/filecon.svg"
                  width={100}
                  height={100}
                  className="max-w-[300px] w-[70%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponse;
