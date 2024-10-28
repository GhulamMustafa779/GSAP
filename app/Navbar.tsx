'use client';

import React, {useState} from 'react'
import {links} from '@/misc/routes'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Link from "next/link"

const Navbar = () => {
    const [toggle, setToggle] = useState<Boolean>(true);
    const [indx, setIndx] = useState<Number|null>(null);

  return (
    <aside className='relative flex flex-col justify-center bg-gray-950 h-[100vh] w-100 max-w-[200px] p-3'>
        <div 
        className='absolute -right-2 top-1 border border-gray-400 rounded-md bg-gray-800 hover:bg-gray-400 cursor-pointer'
        onClick={() => setToggle(!toggle)}>
            <MdKeyboardDoubleArrowLeft className={`text-white text-lg ${toggle ? 'rotate-0':'rotate-180'} hover:text-gray-900`}/>
        </div>
        {   toggle && 
            <nav className='flex flex-col gap-1 w-full'> 
            {
                links.map((link, index) => (
                    <Link key={link.title} onClick={()=> setIndx(index)} href={link.route} className={`text-sm font-medium ${index == indx ? 'text-white': 'text-zinc-500 hover:text-zinc-200'} p-1 w-full whitespace-nowrap`}>{link.title}</Link>
                ))
            }     
        </nav>
        }
    </aside>
  )
}

export default Navbar