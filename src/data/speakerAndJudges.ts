import { SpeakerOrJudgeInfo } from '../types';
import eCellLogo from '../../public/Images/ecelllogo.png';
import taranjotSignImage from "/public/Images/speakers/Taranjot.png";
import agamjotSinghImage from "/public/Images/speakers/agamjot.jpg";
import anshSinghImage from "/public/Images/speakers/ansh_sharma.jpg";
import yashikaImage from "/public/Images/speakers/yashika.png";
import jayant from "/public/Images/speakers/jayant.webp";

const speakersAndJudges: SpeakerOrJudgeInfo[] = [
  {
    name: 'Taranjot Singh',
    about:
      `10K+ @LinkedIn | SIH 2022 Winner 🏆 | Full Stack Web Developer @Placewit 🧑‍💻 | Hack BVICAM 4.0, HackHound'23, Vihaan 6.0, CodeForGood, Smart Tank Winner 🏆 | Content Team Lead @GDSC-GTBIT ✨ | Startup Enthusiast 🚀`,
    image: taranjotSignImage,
    industry: 'Tech, Community Building, and Startups.',
    socials: {
      linkedIn: 'https://www.linkedin.com/in/taranjotsingh23',
    }
  },
  {
    name: 'Ansh Sharma',
    about:
      `ML Researcher MITACS GRI'22 @UbiLab University of Waterloo | Ex-Intern @University Malaya @IIT Delhi @IIT Bombay @bitgrit | Fmr founder @GitHub Community SRM | Hackathon Judge & Mentor | HackCBS 3.0 & HackThisFall Winner`,
    image: anshSinghImage,
    industry: 'ML, NLP, CV, and System Design.',
    socials: {
      linkedIn: 'https://www.linkedin.com/in/anshsharma09/',
    }
  },
  {
    name: 'Agamjot Singh',
    about:
      `Tech Intern @Newton School | Hackathons Mentor(x15) | Community Builder @LumosLabs, @Apli | FRT Intern @Microsoft | Former DevRel @Keployio | Building @CodeSetGo`,
    image: agamjotSinghImage,
    industry: 'MERN(frontend)',
    socials: {
      linkedIn: 'https://www.linkedin.com/in/agamjot-singh/',
    }
  },
  {
    name: "Jatin Pandey",
    industry: "tech",
    about:
      "Developer Relations Manager @Zeeve | Founding Organizer @ Hack The League | Advocating Compassion-in-Tech || Zeeve",
    image: jayant,
    socials: {
      linkedIn: "https://www.linkedin.com/in/jatinjpnd268/",
    },
  },
  {
    name: 'Yashika Chugh',
    about:
      'Experienced Web3 marketer and partnerships expert, affiliated with Trace Network Labs, leading The Phoenix Guild Delhi Chapter. Award-winning entrepreneur from School of Future.',
    image: yashikaImage,
    industry: 'Web 3.0',
    socials: {
      twitter: 'https://twitter.com/YashikaChugh4',
    }
  },
];

export default speakersAndJudges;
