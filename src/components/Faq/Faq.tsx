import { Bungee_Inline } from "@next/font/google";
import Dropdown from "./useDropdown";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

export default function Faq() {
  const faq = [
    [
      "How much does it cost to participate?",
      "Nothing, participation in Hack-a-preneur is absolutely FREE!",
    ],
    [
      "What is the venue for the event?",
      "The offline hackathon will be held at Netaji Subhash University of Technology, Dwarka, Delhi. Other details will be shared with you via email.",
    ],
    [
      "Who can participate? Do any prerequisites or skills required to exist?",
      "Participation in this event is open to everyone. The only prerequisites are excitement and motivation. It’s a beginner-friendly hackathon. We are encouraging beginners to begin their coding journey with us. But having coding and programming experience is a significant benefit.",
    ],

    [
      "What are the rules on the Team Size?",
      "You can participate alone or in a team of max 4.",
    ],
    [
      "Are you required to be enrolled in a degree program?",
      "Yes, you are required to be enrolled in degree program in order to participate in the hackathon as student.",
    ],
    ["Have more questions?", "Contact us"],
  ];

  return (
    <div className="max-w-7xl m-auto pt-20" id="faq">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl md:text-4xl text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        FAQs
      </h1>
      <div className="grid md:grid-cols-2 w-[80%] md:w-[90%] md:gap-[10%] ">
        <div className="w-full space-y-4">
          {faq.slice(0, 3).map((e) => {
            return (
              <div className="row" key={e[0]}>
                <Dropdown title={e[0]} description={e[1]}></Dropdown>
              </div>
            );
          })}
        </div>
        <div className="space-y-4 w-full mt-4 md:mt-0">
          {faq.slice(3).map((e) => {
            return (
              <div className="row" key={e[0]}>
                <Dropdown title={e[0]} description={e[1]}></Dropdown>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
