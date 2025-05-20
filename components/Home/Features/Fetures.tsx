import Image from 'next/image'
import React from 'react'
import { GoWorkflow } from 'react-icons/go'
import { LuPen } from 'react-icons/lu'
import { MdAccessAlarm, MdOutlineTableBar, MdOutlineTouchApp } from 'react-icons/md'

const Fetures = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
      <div>
        <h1 className='flex justify-center items-center text-2xl font-bold text-gray-600'>Key Feature of The Product</h1>
        <h3 className='mt-2 text-center text-gray-700 font-semibold'>Our Product stands out with its high performance . delivering blazing- fast speeds and <br/> seamless multitasking </h3>
      </div>
      {/* main grid */}
      <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* inner grid  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
            {/* 1 st box  */}
            <div data-aos="fade-right" className='bg-white p-4 shadow-xl rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* icon  */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 opacity-80 '>
                    <MdOutlineTouchApp className='w-6 h-6 text-gray-50'/>
                    </div>
                    {/* heading  */}
                    <h1 className='text-lg font-bold text-gray-700'>App Intregration</h1>
                </div>
                <p className='m-3 text-gray-700 leading-relaxed'>Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Atque, veniam? Lorem ipsum dolor sit amet. </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" className='bg-white p-4 shadow-xl rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* icon  */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 opacity-80 '>
                    <GoWorkflow className='w-6 h-6  text-gray-50'/>
                    </div>
                    {/* heading  */}
                    <h1 className='text-lg font-bold text-gray-700'>Work Flow Builder</h1>
                </div>
                <p className='m-3 text-gray-700 leading-relaxed'>Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Atque, veniam? Lorem ipsum dolor sit amet. </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className='bg-white p-4 shadow-xl rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* icon  */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 opacity-80 '>
                    <LuPen className='w-6 h-6 text-gray-50'/>
                    </div>
                    {/* heading  */}
                    <h1 className='text-lg font-bold text-gray-700'>Problem Solution</h1>
                </div>
                <p className='m-3 text-gray-700 leading-relaxed'>Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Atque, veniam? Lorem ipsum dolor sit amet. </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="400" className='bg-white p-4 shadow-xl rounded-lg'>
                <div className='flex items-center space-x-3'>
                    {/* icon  */}
                    <div className='w-12 h-12 rounded-3xl flex items-center justify-center bg-pink-500 opacity-80 '>
                    <MdAccessAlarm className='w-6 h-6 text-gray-50'/>
                    </div>
                    {/* heading  */}
                    <h1 className='text-lg font-bold text-gray-700'>Life time Access</h1>
                </div>
                <p className='m-3 text-gray-700 leading-relaxed'>Lorem ipsum, Lorem ipsum dolor sit amet. dolor sit amet consectetur adipisicing elit. Atque, veniam? Lorem ipsum dolor sit amet. </p>
            </div>
        </div>


        {/* image grid  */}
        <div>
            <Image src="/images/f1.png" alt='' height={700} width={700 } />
        </div>
      </div>
    </div>
  )
}

export default Fetures
