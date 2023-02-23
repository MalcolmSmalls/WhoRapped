import React from 'react'
import { nas } from '../assets'

export default function Rapper() {
  return (
    <div className='container flex flex-col border w-14 justify-center items-center'>
      <div
        className='container rounded-full h-10 w-10 bg-cover  border items-center'
        style={{ backgroundImage: `url(${nas})` }}
      ></div>
      <span className='uppercase font-Poppins'>Nas</span>
    </div>
  )
}
