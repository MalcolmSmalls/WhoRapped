import React from 'react'

export default function Navbar() {
  return (
    <div className='flex shadow-md h-14 justify-end items-center pr-10 '>
      <nav>
        <ul className='flex gap-5 uppercase text-xl  font-TiltWarp text-red-700 hover:text-gray-300'>
          <li>Log-In</li>
          <li>Charts</li>
        </ul>
      </nav>
    </div>
  )
}
