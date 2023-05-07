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
          className={`${bungee.className} text-center text-2xl md:text-3xl    text-transparent bg-gradient-to-r mb-6 from-[#FFD700] to-[#F8EA8C] bg-clip-text`}
        >
          ₹ 30,000
        </h1>
      </div>
    </div>
  );
}
