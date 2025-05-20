import Image from 'next/image'
import React from 'react'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'

type Props = {
    image:string,
    name:string,
    rating:string
}
function ClientCart({image,name,rating}:Props) {
  return (
    <div  className='bg-white shadow-2xl flex  p-8 space-y-4 space-x-6 rounded-lg'>
      <div className='sm:w-[40%] '>
        <Image src={image} alt={name} height={350} width={350}  className='rounded-lg object-cover' />
      </div>
      <div>
        <h1 className=' font-bold text-2xl mt-3 text-gray-600'>{name}</h1>
        <div className='flex items-center  mt-3'>
            <p className='text-yellow-500 text-2xl mr-3 font-bold'>{rating}</p>
             <FaStar className='w-4 h-4  text-yellow-600' />
             <FaStar className='w-4 h-4  text-yellow-600' />
             <FaStar className='w-4 h-4  text-yellow-600' />
             <FaStar className='w-4 h-4  text-yellow-600' />
             <BsStarHalf className='w-4 h-4  text-yellow-600' />
        </div>
        <p className='text-gray-700 mt-2'> Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas? Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default ClientCart 
