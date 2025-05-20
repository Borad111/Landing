import BoxText from '@/components/Helper/BoxText'
import Image from 'next/image'
import React from 'react'

function Team() {
  return (
    <div className='pt-16 pb-16 '>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
        {/* text contant */}
        <div className='lg:col-span-2'>
        <BoxText>Our team</BoxText>
        <h1 className='mt-4 text-xl  md:text-2xl font-bold text-gray-800'>Our Team of Expensional Talent ,  Innovation <br/> and Vision</h1>
        <p className='mt-4 text-gray-700'>Lorem olor, sit amet consectetur adipisicing elit. Quia voluptatem magnam in eveniet veritatis consequuntur doloremque corporis nesciunt atque commodi. consectetur adipisicing elit. Sint harum odit culpa incidunt at quos. </p>
       <div className='mt-10'>
       <a href="#_" className="relative rounded px-5 py-2.5  overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
    <span className="relative">Join Our Team </span>
</a>
       </div>
        </div>
        {/* Image Contant  */}
        <div className=' sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3'>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='relative w-[300px]'>
            <Image src="/images/t1.jpg" alt='team' width={300 } height={300} className='rounded-lg' />
            <div className='absolute w-full  bottom-0 p-4 bg-rose-500 bg-opacity-10 rounded-lg'>
                <p className='text-lg text-white font-bold'>Obicho ucchia</p>
                <p className='text-white font-bold'>(Founder)</p>
            </div>
        </div>
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='relative w-[300px] '>
            <Image src="/images/t2.jpg" alt='team' width={300 } height={300} className='rounded-lg' />
            <div className='absolute w-full  bottom-0 p-4 bg-orange-400 bg-opacity-10 rounded-lg'>
                <p className='text-lg text-white font-bold'>jessica Doe ucchia</p>
                <p className='text-white font-bold'>(Co-Founder)</p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Team
