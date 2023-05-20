import { Role, SpeakerOrJudgeInfo } from "../types";
import eCellLogo from "../../public/Images/ecelllogo.png";
import taranjotSignImage from "/public/Images/speakers/Taranjot.png";
import agamjotSinghImage from "/public/Images/speakers/agamjot.jpg";
import anshSinghImage from "/public/Images/speakers/ansh_sharma.jpg";
import yashikaImage from "/public/Images/speakers/yashika.png";
import lakshayImage from "/public/Images/speakers/lakshaygaur.jpeg";
import jayant from "/public/Images/speakers/jayant.webp";
import jaiImage from "/public/Images/speakers/jaisadana.jpeg";
import venkateshImage from "/public/Images/speakers/bvenkatesh.jpeg";
import himanshuImage from "/public/Images/speakers/hsinghal.jpeg";
import ayonImage from "/public/Images/speakers/ayonroy.jpeg";
import parikhImage from "/public/Images/speakers/parikhjain.jpeg";
import nancyImage from "/public/Images/speakers/nancyjuneja.jpeg";

const speakersAndJudges: SpeakerOrJudgeInfo[] = [
  {
    name: "Taranjot Singh",
    about: `10K+ @LinkedIn | SIH 2022 Winner 🏆 | Full Stack Web Developer @Placewit 🧑‍💻 | Hack BVICAM 4.0, HackHound'23, Vihaan 6.0, CodeForGood, Smart Tank Winner 🏆 | Content Team Lead @GDSC-GTBIT ✨ | Startup Enthusiast 🚀`,
    image: taranjotSignImage,
    industry: "Tech, Community Building, and Startups.",
    socials: {
      linkedIn: "https://www.linkedin.com/in/taranjotsingh23",
    },
    role: Role.Mentor,
  },
  {
    name: "Ansh Sharma",
    about: `ML Researcher MITACS GRI'22 @UbiLab University of Waterloo | Ex-Intern @University Malaya @IIT Delhi @IIT Bombay @bitgrit | Fmr founder @GitHub Community SRM | Hackathon Judge & Mentor | HackCBS 3.0 & HackThisFall Winner`,
    image: anshSinghImage,
    industry: "ML, NLP, CV, and System Design.",
    socials: {
      linkedIn: "https://www.linkedin.com/in/anshsharma09/",
    },
    role: Role.Mentor,
  },
  {
    name: "Agamjot Singh",
    about: `Tech Intern @Newton School | Hackathons Mentor(x15) | Community Builder @LumosLabs, @Apli | FRT Intern @Microsoft | Former DevRel @Keployio | Building @CodeSetGo`,
    image: agamjotSinghImage,
    industry: "MERN(frontend)",
    socials: {
      linkedIn: "https://www.linkedin.com/in/agamjot-singh/",
    },
    role: Role.Mentor,
  },
  {
    name: "Yashika Chugh",
    about:
      "Experienced Web3 marketer and partnerships expert, affiliated with Trace Network Labs, leading The Phoenix Guild Delhi Chapter. Award-winning entrepreneur from School of Future.",
    image: yashikaImage,
    industry: "Web 3.0",
    socials: {
      twitter: "https://twitter.com/YashikaChugh4",
    },
    role: Role.Mentor,
  },
  {
    name: "Lakshay Gaur",
    industry: "Blockchain",
    about:
      "Blockchain Architect at Zeeve | Member of Hyperledger India Chapter",
    image: lakshayImage,
    socials: {
      linkedIn: "https://www.linkedin.com/in/lakshay-gaur-2241b4146/",
    },
    role: Role.Speaker,
  },
  {
    name: "B. Venkatesh",
    about:
      "Web3 Developer | Technical Lead @5irechain | Founder @RapAdds | Ex-Blockchain Dev @RouterProtocol | Fellow @Polygon | Flutter Developer | Web Developer | Rapper",
    image: venkateshImage,
    industry: "Web 3.0",
    socials: {
      linkedIn: "https://www.linkedin.com/in/b-venkatesh-b0b839121/",
    },
    role: Role.Speaker,
  },
  {
    name: "Jai Sadana",
    about:
      "Founder SSOC and SWOC | Community Manager | NFT | Building DAO | Creator Social Community",
    image: jaiImage,
    industry: "Web 3.0",
    socials: {
      instagram: "https://www.instagram.com/jaisadana19/",
    },
    role: Role.Speaker,
  },
  {
    name: "Himanshu Singhal",
    about:
      "Esteemed professional with comprehensive industry understanding. CEO of NSUT IIF with experience collaborating with domestic and international clients.",
    image: himanshuImage,
    industry: "Tech",
    socials: {
      // instagram: "https://www.instagram.com/jaisadana19/",
    },
    role: Role.Judge,
  },
  {
    name: "Ayon Roy",
    about:
      "Data Scientist exploring Market Research 🎤 Speaker/Mentor/Judge @ 160+ Conferences/Hackathons 🌳 AI, ML for Climate 🚀 Community @ Kaggle Days 👨‍💻 Z by HP Global Data Science Ambassador",
    image: ayonImage,
    industry: "Machine Learning",
    socials: {
      linkedIn: "https://www.linkedin.com/in/ayon-roy/",
    },
    role: Role.Judge,
  },
  {
    name: "Parikh Jain",
    about:
      "Founder | Youtuber | Ex-Founding Member at Coding Ninjas | Ex- Amazon | DTU",
    image: parikhImage,
    industry: "Startup/Tech",
    socials: {
      linkedIn: "https://www.linkedin.com/in/parikh-jain-79568798/",
    },
    role: Role.Judge,
  },
  {
    name: "Nancy Juneja",
    about:
      'CEO & Founder- MENTORx l REVUP , 3X TEDx Speaker, Josh Speaker, GGI"s 100 Most Influential Business Women, Mentor Of Change - Niti Aayog, Government Of India',
    image: nancyImage,
    industry: "Buisness/Coaching",
    socials: {
      linkedIn: "https://www.linkedin.com/in/nancyjuneja/",
    },
    role: Role.Judge,
  },
];

export default speakersAndJudges;
