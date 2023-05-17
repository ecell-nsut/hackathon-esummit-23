import { Bungee_Inline } from "@next/font/google";
import Image from "next/image";
import sponsors from "../../data/sponsors";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

const Sponse = () => {
  return (
    <div
      className="min-h-[75vh] p-10 md:px-20 lg:px-28 w-full flex flex-col items-center mb-10"
      id="sponser"
    >
      <h1
        className={`${bungee.className} text-center  mt-20 mb-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight  text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text  `}
      >
        OUR PARTNERS
      </h1>
      <div className="w-full" style={{ width: "100%" }}>
        <h1
          className={`${bungee.className} text-center text-2xl md:text-3xl    text-transparent bg-gradient-to-r mb-6 from-[#FFD700] to-[#F8EA8C] bg-clip-text`}
        >
          GOLD SPONSERS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 sm:p-24">
          {sponsors.gold.map((e) => (
            <div id="sponsor-grid-item" key={`${sponsors.gold.indexOf(e)}`}>
              <a
                href={`${e.URL}`}
                target="_blank"
                rel="noreferrer"
                className="max-w-[400px] flex justify-center w-full items-center bg-slate-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300"
              >
                <Image
                  src={`${e.image}`}
                  width={100}
                  height={100}
                  className="max-w-[300px] w-[70%] sponsi-img"
                  alt={`${e.name} Logo`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full" style={{ width: "100%" }}>
        <h1
          style={{ color: "#808080" }}
          className={`${bungee.className} text-center text-2xl md:text-3xl    text-transparent bg-gradient-to-r mb-6 from-[#738580] to-[#8A9EA0] bg-clip-text`}
        >
          Silver SPONSERS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 sm:p-24">
          {sponsors.silver.map((e) => (
            <div id="sponsor-grid-item" key={`${sponsors.silver.indexOf(e)}`}>
              <a
                href={`${e.URL}`}
                target="_blank"
                rel="noreferrer"
                className="max-w-[400px] flex justify-center w-full items-center bg-slate-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300"
              >
                <Image
                  src={`${e.image}`}
                  width={100}
                  height={100}
                  className="max-w-[300px] w-[70%] sponsi-img"
                  alt={`${e.name} Logo`}
                />
              </a>
            </div>
          ))}
        </div>
        {sponsors.partners.map((e) => (
          <div
            className="w-full"
            style={{ marginTop: 50, width: "100%" }}
            key={`${sponsors.partners.indexOf(e)}`}
          >
            <h1
              style={{ color: "#b08d57" }}
              className={`${bungee.className} text-center text-2xl md:text-3xl    text-transparent bg-gradient-to-r mb-6 from-[#738580] to-[#8A9EA0] bg-clip-text`}
            >
              {e.type}
            </h1>
            <div className="sponsor-grid" style={{ justifyContent: "center" }}>
              <div id="sponsor-grid-item">
                <a
                  href={`${e.URL}`}
                  target="_blank"
                  rel="noreferrer"
                  className="max-w-[400px] flex justify-center w-full items-center bg-slate-300 h-[100px] bg-opacity-[0.07] rounded-3xl drop-shadow-semibold hover:drop-shadow-lowGlow transition-[filter] duration-300"
                >
                  <Image
                    src={`${e.image}`}
                    width={100}
                    height={100}
                    className="max-w-[300px] w-[70%] sponsi-img"
                    alt={`${e.name} Logo`}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponse;
