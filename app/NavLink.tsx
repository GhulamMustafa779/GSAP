import React from 'react'
import Link from 'next/link'

interface Props {
    title: string,
    link: string
}

const NavLink = ({title, link}: Props) => {
  return (
    <Link href={link} className='text-sm text-center text-gray-300 font-medium hover:text-white hover:bg-slate-800 p-2 w-full'>{title}</Link>
  )
}

export default NavLink