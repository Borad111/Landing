import React, { Children } from 'react'

type Props={
    children:React.ReactNode;
}
const BoxText = ({children}:Props) => {
  return (
    <div>
      <h1 className='border-2 border-gray-300  font-bold  text-lg px-4 w-fit rounded-lg   bg-gray-100 py-2  text-rose-300 font-bold '>{children}</h1>
    </div>
  )
}

export default BoxText
