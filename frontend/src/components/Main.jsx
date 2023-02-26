import React from 'react'
import { Bars, Rapper, Fields, Navbar } from './'
import { nas, jayz, kanye } from '../assets'

export default function Main() {
  return (
    <div>
      <Navbar />

      <div className='h-full w-screen flex justify-center flex-col'>
        <h1 className='pt-20 font-PermanentMarker text-6xl self-center text-red-700 pb-1'>
          Who Rapped
        </h1>
        <div className='flex flex-col items-center mx-auto w-1/2 gap-5'>
          <Bars artist='Jay-Z' photo={jayz} />

          {/* <Rapper artist='Jay-Z' photo={jayz} />
            <Rapper artist='Nas' photo={nas} />
            <Rapper artist='Kanye West' photo={kanye} />
            <Rapper artist='50 Cent' photo='' />
            <Rapper artist='Eminem' photo='' /> */}
          <div className=''>
            <Fields />
          </div>
        </div>
      </div>
    </div>
  )
}
