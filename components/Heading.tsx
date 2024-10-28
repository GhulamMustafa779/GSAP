import React from 'react'

interface Props{
    text: string
}

const Heading = ({text}:Props) => {
  return (
    <h1 className='text-xl font-semibold text-gray-800 mb-[20px]'>{text}</h1>
  )
}

export default Heading