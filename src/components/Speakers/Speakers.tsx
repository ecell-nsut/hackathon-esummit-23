import { Bungee_Inline } from "@next/font/google";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

export default function Speakers() {
  const array = [
    [
      "Name",
      "About : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "/images/ecelllogo.png",
      "Industry",
    ],
    ["Name", "About : Test for height.", "/images/ecelllogo.png", "Industry"],
    [
      "Name",
      "About : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "/images/ecelllogo.png",
      "Industry",
    ],
    [
      "Name",
      "About : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "/images/ecelllogo.png",
      "Industry",
    ],
    [
      "Name",
      "About : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "/images/ecelllogo.png",
      "Industry",
    ],
  ];
  return (
    <div className="max-w-7xl m-auto pt-20" id="pool">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl md:text-4xl    text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        Speakers and Judges
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          width: "90%",
        }}
      >
        {array.map((e) => {
          return (
            <div
              key={e[0]}
              className="text-gray-100 bg-opacity-10 bg-white noborder"
              style={{
                margin: 10,
                borderRadius: 20,
                padding: 10,
              }}
            >
              <div
                style={{
                  backgroundImage: `url('.${e[2]}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: 350,
                  marginBottom: 40,
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p
                  className={`${bungee.className} text-1xl md:text-2xl     text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
                >
                  {e[0]}
                </p>
                <p style={{ marginBottom: 24, fontSize: 15.3 }}>{e[3]}</p>
                <p style={{ margin: 10, marginBottom: 20 }}>{e[1]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
