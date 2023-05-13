import { TrackInfoProps } from '../types'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { SiHiveBlockchain } from 'react-icons/si'
import { MdAttachMoney, MdCastForEducation } from 'react-icons/md'
import { SiYoutubegaming } from 'react-icons/si'
import { BiBrain } from 'react-icons/bi'

const tracks: (TrackInfoProps&{image: JSX.Element})[] = [
  {
    image: <GiArtificialIntelligence size={150} className='text-gray-400' />,
    title: 'AI',
    slug: 'AI',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    image: <SiHiveBlockchain size={150} className='text-gray-400' />,
    title: 'Blockchain',
    slug: 'blockchain',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    image: <MdAttachMoney size={150} className='text-gray-400' />,
    title: 'FinTech',
    slug: 'fintech',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    image: <MdCastForEducation size={150} className='text-gray-400' />,
    title: 'EdTech',
    slug: 'edtech',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    image: <SiYoutubegaming size={150} className='text-gray-400' />,
    title: 'Gaming',
    slug: 'gaming',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    image: <BiBrain size={150} className='text-gray-400' />,
    title: 'Creative',
    slug: 'creative',
    sponsor: 'E-cell NSUT',
    sponsoredTrack: false,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
]

export default tracks
