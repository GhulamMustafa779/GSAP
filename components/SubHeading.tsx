import React from 'react'

interface Props{
    text: string
}

const SubHeading = ({text}: Props) => {
  return (
    <h2 className='text-md text-gray-700 mb-[15px] font-semibold'>
        {text}
    </h2>
  )
}

export default SubHeading