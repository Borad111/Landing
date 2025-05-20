import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>

    {/* image contant */}
    <div data-aos="zoom-in">
      <Image src="/images/about.png" alt='About' width={600} height={600} />
    </div>

    {/* text contant  */}
    <div>
      <BoxText>About Us</BoxText>
      <h1 className='text-2xl sm:text-3xl font-bold  text-gray-800 mt-3 leading-[2.5rem] sm:leading-[3rem]' >Everything You Need To Grow Your Business</h1>
      <p className='font-normal text-lg mt-3 leading-relaxed text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam explicabo dicta quis fugiat. Cum exercitationem suscipit vitae, culpa eius fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, a?</p>
      <button className='text-lg bg-gray-500 px-3 py-2 text-white border rounded-lg mt-2'>Learn More  </button>
      <div className='mt-12 border-l-2 border-gray-500'>
      <div className='ml-6 '>
        <p className='text-gray-700 font-medium'>" The many integration that can be linked  really help me see data from  other tools i also see "</p>
        <div className='flex items-center space-x-6 '>
        <Image src="/images/u1.jpg" alt='' width={40} height={40} className='rounded-full'/>
        <div>
          <p className='font-medium'>Jessica Doe</p>
          <p className='text-gray-700 '>Web Devloper @TechDev </p>
        </div>
        </div>
      </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default About