import { Bungee_Inline } from "@next/font/google";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

export default function Pool() {
  return (
    <div className="max-w-7xl m-auto pt-20" id="pool">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl md:text-4xl    text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        Prize Pool
      </h1>
      <div className="pool-box text-gray-100 bg-opacity-10 bg-white noborder">
        <h1
          className={`${bungee.className} text-center text-5xl md:text-6xl    text-transparent bg-gradient-to-r mb-6 from-[#FFD700] to-[#F8EA8C] bg-clip-text`}
        >
          {/* coming soon */}
          40 Lakh+
        </h1>
        Cash + Kind
        <a href="https://hackaprenuer-2023.devfolio.co" target="_blank" rel="noopener,noreferrer">
          <button
            style={{
              borderRadius: 20,
              backgroundColor: "black",
              padding: 10,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
            }}
          >
            Know More
          </button>
        </a>
      </div>
    </div>
  );
}
