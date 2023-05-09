import { Bungee_Inline } from '@next/font/google'
import Dropdown from './useDropdown'
import faqs from '../../data/faqs'
import { FaqInfo } from '../../types'

const bungee = Bungee_Inline({ subsets: ['latin'], weight: '400' })

export default function Faq () {
  return (
    <div className='max-w-7xl min-h-[80vh] mx-auto' id='faq'>
      <h1
        className={`${bungee.className} text-center my-24 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text`}
      >
        FAQs
      </h1>
      <div className='grid md:grid-cols-2 w-[80%] md:w-[90%] md:gap-[10%] '>
        <div className='w-full space-y-4'>
          {faqs.slice(0, 4).map((faq: FaqInfo) => {
            return (
              <div className='row' key={faq.question}>
                <Dropdown
                  title={faq.question}
                  description={faq.answer}
                ></Dropdown>
              </div>
            )
          })}
        </div>
        <div className='space-y-4 w-full mt-4 md:mt-0'>
          {faqs.slice(4).map((faq: FaqInfo) => {
            return (
              <div className='row' key={faq.question}>
                <Dropdown
                  title={faq.question}
                  description={faq.answer}
                ></Dropdown>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
