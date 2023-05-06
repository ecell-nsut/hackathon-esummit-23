import { Bungee_Inline } from "@next/font/google";
import Dropdown from "./useDropdown";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: "400" });

export default function Faq() {
  return (
    <div className="max-w-7xl m-auto pt-20" id="faq">
      <h1
        className={`${bungee.className} text-center my-24 text-4xl md:text-4xl    text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        FAQs
      </h1>
      <div className="faq-container">
        <div className="col">
          {[
            [
              "How much does it cost to participate?",
              "Nothing, participation in HackHound is absolutely FREE!",
            ],
            [
              "What is the venue for the event?",
              "The offline hackathon will be held in SRM Institute of Science and Technology, Modinagar, Ghaziabad. Other details will be shared with you via email.",
            ],
            [
              "Who can participate? Do any prerequisites or skills required to exist?",
              "Participation in this event is open to everyone. The only prerequisites are excitement and motivation. It’s a beginner-friendly hackathon. We are encouraging beginners to begin their coding journey with us. But having coding and programming experience is a significant benefit.",
            ],
          ].map((e) => {
            return (
              <div className="row" key={e[0]}>
                <Dropdown title={e[0]} description={e[1]}></Dropdown>
              </div>
            );
          })}
        </div>
        <div className="col">
          {[
            [
              "What are the rules on the Team Size?",
              "Participation in this event is open to everyone. The only prerequisites are excitement and motivation. It’s a beginner-friendly hackathon. We are encouraging beginners to begin their coding journey with us. But having coding and programming experience is a significant benefit.",
            ],
            [
              "Will there be food?",
              "Yes, you will be provided with meals. We don’t want to keep our hackers on empty stomachs. And we know the importance of caffeine to keep on with the code hiking so a lot of coffee will also be available for our hackers.",
            ],
            [
              "Are you required to be enrolled in a degree program?",
              "Yes, you are required to be enrolled in degree program in order to participate in the hackathon as student.",
            ],
          ].map((e) => {
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
