import { SpeakerOrJudgeInfo } from "../types";
import agamjot from "../../public/Images/speakers/agamjot.webp";
import yashika from "../../public/Images/speakers/yashika.webp";
import jayant from "../../public/Images/speakers/jayant.webp";
import ansh from "../../public/Images/speakers/Ansh Sharma Image (1).jpg";
import taranjot from "../../public/Images/speakers/Taranjot.png";

const speakersAndJudges: SpeakerOrJudgeInfo[] = [
  {
    name: "Agamjot Singh",
    industry: "MERN",
    about:
      "This is Agam, a tech enthusiast with a passion for front-end development and Community building. With an expertise in ReactJS, i have created stunning web designs and developed user-friendly interfaces. Currently been working with Newton School as an Intern and have worked as Devrel at Keploy, Campus BUIDLer at Binance, Scalers Academy(representing 100k+ community on discord), LumosLabs. Additionally, I have Judged Hack A Miner, Ingenious Hackathon and have mentored at 15+ Hackathons, Open Source Events like GWoC'21, SWoC'21, GSSoC'22 HacktoberFest(Community Led Initiative) and for organizations like GDSC, Girscript Foundation, Script Foundation.",
    image: agamjot,
    socials: {
      linkedIn: "https://www.linkedin.com/in/agamjot-singh/",
    },
  },
  {
    name: "Yashika Chugh",
    industry: "Web3",
    about:
      "I do Marketing and Partnerships with Web3 Companies. Currently associated with Trace Network Labs. Heading The Phoenix Guild Delhi Chapter. Entrepreneurs Academy graduate from the School of Future. There I built a business project in 100 days that solves a world problem. Awarded by Education Minister, Delhi State Winner (2021) and representative in World Skills Competition in IT Software Solutions for Businesses.",
    image: yashika,
    socials: {
      twitter:
        "https://twitter.com/YashikaChugh4?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    },
  },
  {
    name: "Jayant Pandey",
    industry: "tech",
    about:
      "Developer Relations Manager @Zeeve | Founding Organizer @ Hack The League | Advocating Compassion-in-Tech || Zeeve",
    image: jayant,
    socials: {
      linkedIn: "https://www.linkedin.com/in/jatinjpnd268/",
    },
  },
  {
    name: "Taranjot Singh",
    about:
      "Won Smart India Hackathon 2022, Participated in 15+ Hackathons till date and Won 6+ Hackathons, Mentored at BFF Hackathon, Content Team Lead at GDSC-GTBIT, 10K+ followers on LinkedIn, Full Stack Web Developer, Startup & Entrepreneurship enthusiast.",
    image: taranjot,
    industry: "Web Dev",
    socials: {
      linkedIn: "https://www.linkedin.com/in/taranjotsingh23/",
    },
  },
  {
    name: "Ansh Sharma",
    about:
      "Machine Learning Researcher at the University of Waterloo and a big open-source enthusiast who cherishes bringing together like-minded people and empowering them in their progression in the tech marathon!",
    image: ansh,
    industry: "Machine Learning",
    socials: {
      linkedIn: "https://www.linkedin.com/in/anshsharma09/",
    },
  },
];

export default speakersAndJudges;
