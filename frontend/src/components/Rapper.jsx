import React from 'react'
import { nas } from '../assets'

export default function Rapper() {
  return (
    <div className='container flex flex-col  w-14 justify-center items-center'>
      <div
        className='container rounded-full h-14 w-14 bg-cover border-4 border-gray-300 items-center'
        style={{ backgroundImage: `url(${nas})` }}
      ></div>
      <span className='uppercase font-Poppins'>Nas</span>
    </div>
  )
}
