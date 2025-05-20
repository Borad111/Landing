import React from 'react'

type Props={
    time:string,
    price:string
}
function PriceCart({time,price}:Props) {
  return (
    <div className='bg-white rounded-lg border-t-4 p-8 border-rose-400'>
        <h1 className='text-sky-500 text-center items-center font-bold  text-xl '>{time} Member Ship</h1>
        <p className='mt-4 text-gray-600 font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque reprehenderit non quaerat sed commodi alias.</p>
        <div className='mt-8'>
            <div className='text-gray-700 font-bold  text-2xl text-center '>${price} / Month</div>
        </div>
        <div className='mt-12 flex justify-center'>
        <a href="#_" className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
     Upgrad Now
</a>
        </div>
    </div>
  )
}

export default PriceCart
