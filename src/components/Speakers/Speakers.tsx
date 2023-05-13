import { Bungee_Inline } from '@next/font/google'
import Image from 'next/image'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import speakersAndJudges from '../../data/speakerAndJudges'
import { SpeakerOrJudgeInfo } from '../../types'

const bungee = Bungee_Inline({ subsets: ['latin'], weight: '400' })

export default function Speakers () {
  return (
    <div className='max-w-screen-xl m-auto pt-20' id='speakers'>
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        Speakers
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 sm:p-24'>
        {speakersAndJudges.map((speakerOrJudge: SpeakerOrJudgeInfo) => {
          return (
            <div
              key={speakerOrJudge.name}
              className='text-gray-100 bg-opacity-10 bg-white flex flex-col items-center justify-between noborder rounded-3xl p-4'
            >
              <div>
                <div className='w-24 h-24 rounded-full overflow-hidden m-auto my-8'>
                  <Image
                    src={speakerOrJudge.image}
                    alt='Speaker or judge Image'
                    className='object-cover w-full h-full'
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <p
                    className={`${bungee.className} text-1xl md:text-2xl text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
                  >
                    {speakerOrJudge.name}
                  </p>
                  <p style={{ marginBottom: 24, fontSize: 15.3 }}>
                    {speakerOrJudge.industry}
                  </p>
                  <p style={{ margin: 10, marginBottom: 20 }}>
                    {speakerOrJudge.about}
                  </p>
                </div>
              </div>
              <div className='flex space-x-2 items-center justify-center my-4'>
                {speakerOrJudge.socials?.linkedIn && (
                  <a
                    href={speakerOrJudge.socials.linkedIn}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {speakerOrJudge.socials?.instagram && (
                  <a
                    href={speakerOrJudge.socials.instagram}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
                {speakerOrJudge.socials?.github && (
                  <a
                    href={speakerOrJudge.socials.github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {speakerOrJudge.socials?.twitter && (
                  <a
                    href={speakerOrJudge.socials.twitter}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
