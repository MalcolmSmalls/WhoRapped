import React from 'react'

export default function Navbar() {
  return (
    <div className='flex shadow-md h-14 justify-end items-center pr-10 '>
      <nav>
        <ul className='flex gap-7 uppercase text-xl tracking-widest font-Poppins text-red-700 '>
          <li className='hover:text-gray-300'>Log-In</li>
          <li className='hover:text-gray-300'>Charts</li>
        </ul>
      </nav>
    </div>
  )
}
