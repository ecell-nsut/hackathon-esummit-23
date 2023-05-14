import { TrackInfoProps } from '../types'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { SiHiveBlockchain } from 'react-icons/si'
import { MdAttachMoney, MdCastForEducation } from 'react-icons/md'
import { SiYoutubegaming } from 'react-icons/si'
import { BiBrain } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'

const tracks: (TrackInfoProps&{image: JSX.Element})[] = [
  {
    image: <GiArtificialIntelligence size={150} className='text-gray-400' />,
    title: 'AI',
    slug: 'AI',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Will be updated soon`,
  },
  {
    image: <BsGlobe2 size={150} className='text-gray-400' />,
    title: 'Web 3',
    slug: 'web3',
    sponsor: '5ireChain',
    sponsoredTrack: true,
    description: `We’re open to all kinds of projects across themes built on 5ire, but here are a few things we’re actively thinking about these days in case you’re looking for some inspiration:
    \n1. DeFi. Build the next-gen financial applications for the decentralized economy.
    \n2. NFTs. Combine creativity with engineering to build awesome NFT dApps.
    \n3. Gaming. Make some fun and interactive games on the chain.
    \n4. Tooling - Infrastructure. Create developer/infrastructure tooling for the 5ire ecosystem.
    \n5. Public Goods. Develop creative, socially impactful solutions for sustainability or climate change.
    \n6. Web3 Integration in Web2. Build the Web3 version of your favorite Web2 product.
    \n7. Or use your imagination and build any DApps that excites you. The sky’s the limit!`,
  },
  {
    image: <SiHiveBlockchain size={150} className='text-gray-400' />,
    title: 'Blockchain',
    slug: 'blockchain',
    sponsor: 'Zeeve',
    sponsoredTrack: true,
    description: `Build a Solution with the Zeeve Platform for the following problem statements -

    \n1. Intellectual Property Rights - Secure Your Assets through Blockchain
    \n2. Decentralized Gaming & NFTs - Gaming for Web3
    \n3. Self Sovereign Identity - Empowering KYC of Evolving Internet
    \n4. Digital Records Management - Fully Verifiable Data records
    \n5. Logistics & Pharma - SLAs, Traceability & Safety`,
  },
  {
    image: <MdCastForEducation size={150} className='text-gray-400' />,
    title: 'EdTech',
    slug: 'edtech',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `
    The challenge for this hackathon is to create innovative solutions that address the lack of personalized and effective learning experiences in EdTech, and the limited accessibility of technology, especially in low-income areas. The goal is to develop affordable and accessible education solutions that can provide high-quality learning experiences to all learners, regardless of their location or background.`,
  },
  {
    image: <SiYoutubegaming size={150} className='text-gray-400' />,
    title: 'Gaming',
    slug: 'gaming',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Will be updated soon`,
  },
  {
    image: <BiBrain size={150} className='text-gray-400' />,
    title: 'Creative',
    slug: 'creative',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `The Creative track is a unique opportunity for participants to showcase their innovation and creativity by choosing any problem statement they are passionate about and designing a solution to address it. This track is ideal for those who want to explore new ideas and take a more unconventional approach to problem-solving.

    Participants in the Creative track will have the freedom to choose any problem statement on any relevant topic. They can explore new areas of interest or bring a fresh perspective to existing challenges. This track encourages participants to think outside the box and come up with unique and innovative solutions that can make a real impact in the world.`,
  },
]

export default tracks
