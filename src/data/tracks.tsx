import { TrackInfoProps } from "../types";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { GiEarthAmerica } from "react-icons/gi";
import Image from "next/image";
import { BsBank2, BsCashCoin } from "react-icons/bs";
import { ImLeaf } from "react-icons/im";

// const tracks: (TrackInfoProps & { image: JSX.Element })[] = [
//   {
//     image: <GiArtificialIntelligence size={150} className='text-gray-400' />,
//     title: 'AI',
//     slug: 'AI',
//     sponsor: 'E-cell NSUT',
//     sponsoredTrack: false,
//     description: `Explore the limitless possibilities of AI at Hack-a-preneur. Participants have the opportunity to build innovative projects in AI domains including but not limited to:

//     \n- Natural Language Processing (NLP)
//     \n- Computer Vision
//     \n- Machine Learning
//     \n- Data Analysis and Predictive Modeling
//     \n- Reinforcement Learning
//     \n- Generative Models
//     \n- AI for Social Good
//     \nUnleash your creativity and develop groundbreaking solutions in these AI domains. Whether it's creating intelligent chatbots, image recognition systems, or predictive models, there's something for everyone.  Join us and be part of the AI revolution at our Hack-a-preneur!`,
//   },
//   {
//     image: <SiHiveBlockchain size={150} className='text-gray-400' />,
//     title: 'Blockchain',
//     slug: 'blockchain',
//     sponsor: 'E-Cell NSUT',
//     sponsoredTrack: false,
//     description: `Immerse yourself in the world of blockchain technology at Hack-a-preneur! Explore a range of exciting domains where you can build innovative projects including but not limited to:

//     \n- Decentralized Applications (DApps)
//     \n- Smart Contracts
//     \n- Cryptocurrency and Tokenization
//     \n- Supply Chain and Logistics
//     \n- Identity Management
//     \n- Governance and Voting
//     \n- Decentralized Finance (DeFi)
//     \n- Social Impact and Sustainability
//     \nUnleash your creativity and showcase your skills by developing groundbreaking solutions in these blockchain domains. Join us at Hack-a-preneur and be part of the blockchain revolution!`,
//   },
//   {
//     image: <MdCastForEducation size={150} className='text-gray-400' />,
//     title: 'EdTech',
//     slug: 'edtech',
//     sponsor: 'E-cell NSUT',
//     sponsoredTrack: false,
//     description: `The challenge for this hackathon is to create innovative solutions that address the lack of personalized and effective learning experiences in EdTech, and the limited accessibility of technology, especially in low-income areas. The goal is to develop affordable and accessible education solutions that can provide high-quality learning experiences to all learners, regardless of their location or background.`,
//   },
//   {
//     image: <GiEarthAmerica size={150} className='text-gray-400' />,
//     title: "Environment",
//     slug: "environment",
//     sponsor: 'E-cell NSUT',
//     sponsoredTrack: false,
//     description: `We at Hack-a-preneur are dedicated to driving positive change for the environment! Join us and make a difference in the domains including but not limited to:

//     \n- Energy Efficiency
//     \n- Waste Reduction and Recycling
//     \n- Climate Data Analysis
//     \n- Water Management and Conservation
//     \n- Sustainable Supply Chain
//     \n- Environmental Education Platforms
//     \n- Wildlife Monitoring and Conservation
//     \n- Green Transportation Solutions
//     \nHarness your creativity and skills to build projects that promote sustainability and environmental stewardship. Together, let's create a greener future at our hackathon!`
//   },
//   {
//     image: <SiYoutubegaming size={150} className='text-gray-400' />,
//     title: 'Gaming',
//     slug: 'gaming',
//     sponsor: 'E-cell NSUT',
//     sponsoredTrack: false,
//     description: `Solve the problems in gaming industry! Explore diverse gaming domains and unleash your creativity. You are free to build solutions for sectors including but not limited to:

//     \n- AR/VR in Games
//     \n- Gaming in Web3
//     \n- Game AI and Procedural Generation
//     \n- eSports and Competitive Gaming
//     \n- Game Analytics and User Experience
//     \n- Game Monetization and In-Game Economies
//     \n- Game Accessibility and Inclusivity
//     \nIgnite your passion for gaming and showcase your skills by building captivating projects in these domains. Join us at Hack-a-preneur for an unforgettable experience!`,
//   },
//   {
//     image: <BiBrain size={150} className='text-gray-400' />,
//     title: 'Creative',
//     slug: 'creative',
//     sponsor: 'E-cell NSUT',
//     sponsoredTrack: false,
//     description: `The Creative track is a unique opportunity for participants to showcase their innovation and creativity by choosing any problem statement they are passionate about and designing a solution to address it. This track is ideal for those who want to explore new ideas and take a more unconventional approach to problem-solving.
//   \nParticipants in the Creative track will have the freedom to choose any problem statement on any relevant topic. They can explore new areas of interest or bring a fresh perspective to existing challenges. This track encourages participants to think outside the box and come up with unique and innovative solutions that can make a real impact in the world.`,
//   },
//   {
//   image: <Image src={"/Images/Sponsers/5ire_Logo-White.svg"} alt="5irechain logo" width={150} height={150} className='text-gray-400' />,
//   title: '5ire',
//   slug: '5ire',
//   sponsor: '5ireChain',
//   sponsoredTrack: true,
//   description: `We're open to all kinds of projects across themes built on 5ire, but here are a few things we're actively thinking about these days in case you're looking for some inspiration:\n
//   \n1. DeFi. Build the next-gen financial applications for the decentralized economy.
//   \n2. NFTs. Combine creativity with engineering to build awesome NFT dApps.
//   \n3. Gaming. Make some fun and interactive games on the chain.
//   \n4. Tooling - Infrastructure. Create developer/infrastructure tooling for the 5ire ecosystem.
//   \n5. Public Goods. Develop creative, socially impactful solutions for sustainability or climate change.
//   \n6. Web3 Integration in Web2. Build the Web3 version of your favorite Web2 product.
//   \n7. Or use your imagination and build any DApps that excites you. The sky's the limit!`,
// },
// {
//   image: <Image src={"/Images/Sponsers/Zeve_Logo-White.svg"} alt="zeeve logo" width={150} height={150} className='mb-8 text-gray-400' />,
//   title: 'Zeeve',
//   slug: 'zeeve',
//   sponsor: 'Zeeve',
//   sponsoredTrack: true,
//   description: `Build a Solution with the Zeeve Platform for the following problem statements -\n

//   \n1. Intellectual Property Rights - Secure Your Assets through Blockchain
//   \n2. Decentralized Gaming & NFTs - Gaming for Web3
//   \n3. Self Sovereign Identity - Empowering KYC of Evolving Internet
//   \n4. Digital Records Management - Fully Verifiable Data records
//   \n5. Logistics & Pharma - SLAs, Traceability & Safety`,
// },
// {
//   image: <Image src="/Images/Sponsers/pol.png" alt="polygon logo" width={150} height={150} className="mb-8 text-gray-400" />,
//   title:"Polygon",
//   slug:"polygon",
//   sponsor: "Polygon",
//   sponsoredTrack: true,
//   description: `Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.\n
//   1. Best hack built on Ethereum + Polygon: $200\n
//   2. Best hack built on Ethereum: $150`
// },
// {
//   image: <Image src="/Images/Sponsers/solana.png" alt="solana logo" width={150} height={150} className="mb-8 text-gray-400" />,
//   title:"Solana",
//   slug:"solana",
//   sponsor: "Solana",
//   sponsoredTrack: true,
//   description: `Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.\n
//   1. young gun: $USDC 100 for the best project beginners just starting out on Solana\n
//   2. rising teknoking: $USDC 250 for the best project that goes into depth, demonstrating higher-order code\n
//   3. master glasseater: $USDC 500 for the best advanced project that is almost ready for full-time development.`
// },
// {
//   image: <Image src="/Images/Sponsers/replit.png" alt="replit logo" width={150} height={150} className="mb-8 text-gray-400" />,
//   title:"Replit",
//   slug:"replit",
//   sponsor: "Replit",
//   sponsoredTrack: true,
//   description: `Replit is the best platform for quickly starting, sharing, and developing projects in any programming language, right from your browser.\n

//   Winning Project deployed on Replit: $50`
// }
// ];

const tracks: (TrackInfoProps & { image: JSX.Element })[] = [
  {
    image: <BsBank2 size={150} className="text-gray-400" />,
    title: "Banking",
    slug: "banking",
    sponsor: "E-Cell NSUT",
    sponsoredTrack: false,
    description: `To be announced soon...`,
  },
  {
    image: <ImLeaf size={150} className="text-gray-400" />,
    title: "Sustainability",
    slug: "sustainability",
    sponsor: "E-Cell NSUT",
    sponsoredTrack: false,
    description: `To be announced soon...`,
  },
  {
    image: <BsCashCoin size={150} className="text-gray-400" />,
    title: "FinTech",
    slug: "fintech",
    sponsor: "E-Cell NSUT",
    sponsoredTrack: false,
    description: `To be announced soon...`,
  },
  {
    image: (
      <Image
        src={"/Images/Sponsers/5ire_Logo-White.svg"}
        alt="5irechain logo"
        width={150}
        height={150}
        className="text-gray-400"
      />
    ),
    title: "5ire",
    slug: "5ire",
    sponsor: "5ireChain",
    sponsoredTrack: true,
    description: `We're open to all kinds of projects across themes built on 5ire, but here are a few things we're actively thinking about these days in case you're looking for some inspiration:\n
  \n1. DeFi. Build the next-gen financial applications for the decentralized economy.
  \n2. NFTs. Combine creativity with engineering to build awesome NFT dApps.
  \n3. Gaming. Make some fun and interactive games on the chain.
  \n4. Tooling - Infrastructure. Create developer/infrastructure tooling for the 5ire ecosystem.
  \n5. Public Goods. Develop creative, socially impactful solutions for sustainability or climate change.
  \n6. Web3 Integration in Web2. Build the Web3 version of your favorite Web2 product.
  \n7. Or use your imagination and build any DApps that excites you. The sky's the limit!`,
  },
  {
    image: (
      <Image
        src={"/Images/Sponsers/Zeve_Logo-White.svg"}
        alt="zeeve logo"
        width={150}
        height={150}
        className="mb-8 text-gray-400"
      />
    ),
    title: "Zeeve",
    slug: "zeeve",
    sponsor: "Zeeve",
    sponsoredTrack: true,
    description: `Build a Solution with the Zeeve Platform for the following problem statements -\n

  \n1. Intellectual Property Rights - Secure Your Assets through Blockchain
  \n2. Decentralized Gaming & NFTs - Gaming for Web3
  \n3. Self Sovereign Identity - Empowering KYC of Evolving Internet
  \n4. Digital Records Management - Fully Verifiable Data records
  \n5. Logistics & Pharma - SLAs, Traceability & Safety`,
  },
  {
    image: (
      <Image
        src="/Images/Sponsers/Polygon_Logo-White.svg"
        alt="polygon logo"
        width={150}
        height={150}
        className="mb-8 text-gray-400"
      />
    ),
    title: "Polygon",
    slug: "polygon",
    sponsor: "Polygon",
    sponsoredTrack: true,
    description: `Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks.\n
  1. Best hack built on Ethereum + Polygon: $200\n
  2. Best hack built on Ethereum: $150`,
  },
  {
    image: (
      <Image
        src="/Images/Sponsers/Solana Dark.svg"
        alt="solana logo"
        width={150}
        height={150}
        className="mb-8 text-gray-400"
      />
    ),
    title: "Solana",
    slug: "solana",
    sponsor: "Solana",
    sponsoredTrack: true,
    description: `Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.\n
  1. young gun: $USDC 100 for the best project beginners just starting out on Solana\n
  2. rising teknoking: $USDC 250 for the best project that goes into depth, demonstrating higher-order code\n
  3. master glasseater: $USDC 500 for the best advanced project that is almost ready for full-time development.`,
  },
  {
    image: (
      <Image
        src="/Images/Sponsers/logo-light-text-bg.svg"
        alt="replit logo"
        width={150}
        height={150}
        className="mb-8 text-gray-400"
      />
    ),
    title: "Replit",
    slug: "replit",
    sponsor: "Replit",
    sponsoredTrack: true,
    description: `Replit is the best platform for quickly starting, sharing, and developing projects in any programming language, right from your browser.\n
  
  Winning Project deployed on Replit: $50`,
  },
];

export default tracks;
