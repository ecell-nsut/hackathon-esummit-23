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
    description: `
  Problem Statement: Enhancing Bank Security Against Physical Robberies

\nBackground:
\nPhysical robberies pose a significant threat to the safety of bank employees, customers, and assets. Despite existing security measures, criminals continue to devise new strategies and techniques to carry out successful robberies, often resulting in financial losses, potential harm to individuals, and damage to the bank's reputation. This hackathon problem statement aims to develop innovative solutions to enhance bank security against physical robberies, ensuring the safety of all stakeholders and mitigating the risk of successful robberies.
\n
\nProblem Statement:
\nDesign and develop novel technological solutions or systems to increase bank security and deter physical robberies effectively. The proposed solutions should address the following key challenges:
\n
\n1. Early Threat Detection: Develop mechanisms to identify and detect potential threats or suspicious activities inside or near the bank premises at an early stage. The system should leverage advanced technologies such as computer vision, artificial intelligence, and machine learning to monitor and analyze live video feeds, identify unusual behavior patterns, and alert security personnel promptly.
\n
\n2. Secure Entry and Exit Points: Create innovative approaches to fortify the bank's entry and exit points, making it difficult for unauthorized individuals to gain access. Consider implementing intelligent access control systems that utilize biometric authentication, facial recognition, or other cutting-edge technologies to ensure only authorized personnel are granted entry.
\n
\n3. Panic Alarm and Silent Alarms: Design and develop panic alarm systems that enable bank employees to trigger alerts discreetly in the event of a robbery. Explore the use of silent alarms that can directly notify law enforcement agencies or private security teams, providing them with real-time information, including the location within the bank premises.
\n
\n4. Deterrent Measures: Devise strategies to deter potential criminals from attempting robberies in the first place. This may include implementing visible security measures such as improved lighting, prominent surveillance cameras, and physical barriers to discourage criminals and increase the perceived risk of detection.
\n
\n5. Security Training and Education: Develop interactive training programs or applications that educate bank employees on effective security protocols and how to respond during a robbery. Focus on providing realistic simulations, crisis management techniques, and guidelines for minimizing risks to personnel and customers.
\n
\n6. Collaboration with Law Enforcement: Explore ways to enhance collaboration between banks and law enforcement agencies. Design communication platforms or systems that facilitate quick and secure information sharing between the bank's security personnel and law enforcement officials during emergencies or ongoing robbery situations.
\n
\n7. Security Audits and Evaluation: Create tools or systems to conduct regular security audits and evaluations to identify vulnerabilities, assess the effectiveness of existing security measures, and recommend improvements. These audits should cover physical infrastructure, personnel training, emergency response plans, and technology systems.
\n
\nParticipants in this hackathon are encouraged to think creatively and leverage emerging technologies to devise comprehensive solutions that address one or more of the challenges outlined above. The ultimate goal is to enhance bank security, protect lives and assets, and prevent successful physical robberies through innovative, practical, and scalable approaches.
`,
  },
  {
    image: <ImLeaf size={150} className="text-gray-400" />,
    title: "Sustainability",
    slug: "sustainability",
    sponsor: "E-Cell NSUT",
    sponsoredTrack: false,
    description: `
  Problem Statement:
\nCreate a practical technology solution that addresses the issue of food waste and promotes sustainable consumption practices in your community, utilizing emerging technologies such as AI, IoT, blockchain, or data analytics to minimize food waste, optimize resource utilization, and enhance food distribution efficiency.
\n
\nBackground:
\nFood waste is a significant global issue that contributes to environmental degradation, economic losses, and societal inequality. According to the Food and Agriculture Organization (FAO), approximately one-third of the food produced for human consumption is wasted each year, amounting to about 1.3 billion tons globally. In addition to the direct economic impact, food waste also leads to unnecessary consumption of resources such as water, land, and energy, and contributes to greenhouse gas emissions.
\n
\nChallenge:
\nDevelop a technology-driven solution that tackles food waste at various stages, from production and distribution to consumption and disposal. The solution should address one or more of the following aspects:
\n
\nFood Redistribution: Create a platform that connects food establishments, such as restaurants, grocery stores, and cafeterias, with local shelters, food banks, and charities, facilitating the donation of surplus food that would otherwise go to waste. The platform should incorporate real-time inventory management, automated alerts, and efficient logistics to ensure safe and timely delivery of surplus food.
\nSmart Food Management: Design a system that utilizes IoT sensors, smart shelves, or intelligent packaging to monitor and track the freshness, quality, and expiration dates of food products in real-time. This solution should provide consumers with accurate information to make informed purchase decisions, and also alert retailers and consumers when food items are nearing their expiration dates, encouraging timely consumption and reducing waste.
\nFood Waste Analytics: Develop an analytics platform that leverages data from various sources, such as point-of-sale systems, supply chain records, and consumer behavior patterns, to identify trends, patterns, and areas of improvement in the food supply chain. By analyzing this data, the solution should provide insights and recommendations to stakeholders, such as producers, retailers, and policymakers, to optimize processes, reduce waste, and make informed decisions.
\nConsumer Awareness and Behavior Change: Create an application or platform that educates and empowers consumers to make sustainable food choices, minimize food waste at home, and adopt environmentally friendly practices. This solution could include features such as recipe suggestions for leftover ingredients, meal planning tools, portion control guidance, and tips for proper storage and preservation.
\nParticipants in this challenge are encouraged to think creatively, consider the local context and resources, and leverage emerging technologies to develop practical and scalable solutions that can contribute to reducing food waste, promoting sustainability, and fostering a more resilient and inclusive community.
`,
  },
  {
    image: <BsCashCoin size={150} className="text-gray-400" />,
    title: "FinTech",
    slug: "fintech",
    sponsor: "E-Cell NSUT",
    sponsoredTrack: false,
    description: `
  Problem Statement:
\nDevelop a comprehensive financial management solution for startups that addresses the challenges of budgeting, forecasting, and financial analysis, enabling founders and finance teams to make informed decisions, attract investors, and achieve sustainable growth.
\n
\nBackground:
\nFinancial management is a critical aspect of startup operations, and effective management of financial resources is crucial for long-term success. Startups often face unique challenges in terms of limited resources, uncertain revenue streams, and the need to demonstrate financial viability to investors and stakeholders. Therefore, having robust financial tools and systems is essential for startups to optimize cash flow, track financial performance, and project future growth.
\n
\nChallenge:
\nCreate a fintech solution tailored for startups that addresses the following key areas of financial management:
\n
\nBudgeting and Forecasting: Develop a platform that enables startups to create accurate and dynamic budgets, incorporating variables such as revenue projections, operating expenses, and capital investments. The solution should provide forecasting capabilities that consider various scenarios and assist in analyzing the financial impact of potential business decisions.
\nCash Flow Management: Design a tool that helps startups track and manage cash flow effectively, providing real-time visibility into incoming and outgoing cash, optimizing working capital, and predicting potential cash gaps. The solution should incorporate features such as automated invoicing, expense tracking, and cash flow forecasting to ensure financial stability.
\nFinancial Analysis and Reporting: Create a system that facilitates financial analysis and reporting for startups, allowing them to generate key financial metrics, performance indicators, and reports that are essential for decision-making and investor communication. The solution should enable startups to gain insights into profitability, growth trends, and financial health, while ensuring data accuracy and integrity.
\nInvestor Relations and Fundraising: Develop a platform that streamlines investor relations and fundraising activities for startups, providing tools for investor communication, document management, and due diligence. The solution should enable startups to create compelling financial presentations, track investor engagement, and facilitate the fundraising process, improving their ability to secure funding and partnerships.
\nCompliance and Regulatory Support: Build a compliance management system that assists startups in navigating financial regulations, tax obligations, and reporting requirements. The solution should automate compliance tasks, generate necessary reports, and provide alerts and reminders to ensure startups remain compliant with financial regulations.
\nParticipants in this challenge are encouraged to leverage technologies such as cloud computing, AI, machine learning, and data analytics to develop user-friendly, scalable, and secure fintech solutions that cater to the specific financial management needs of startups, enabling them to thrive in a competitive market.
`,
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
