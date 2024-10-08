import React from 'react'
import NavLink from './NavLink'
import {links} from '@/misc/routes'


const Navbar = () => {
  return (
    <aside className='flex flex-col justify-center bg-gray-950 h-[100vh] w-100 max-w-[200px] p-3'>
        <nav className='flex flex-col gap-1 w-full'> 
            {
                links.map((link) => (
                    <NavLink key={link.title} title={link.title} link={link.route} />
                ))
            }     
        </nav>
    </aside>
  )
}

export default Navbar