import { Bars, Rapper, Fields, Navbar } from './components'
// import Rapper from './components/Rapper'

import { useState } from 'react'

function App() {
  return (
    <div>
      <Navbar />

      <div className='h-full w-screen flex justify-center flex-col'>
        <h1 className='pt-20 font-PermanentMarker text-6xl self-center text-red-700 pb-1'>
          Who Rapped
        </h1>
        <div className='flex flex-col items-center mx-auto w-1/2 gap-5'>
          <Bars />
          <div className='flex gap-5 pb-10'>
            <Rapper />
            <Rapper />
            <Rapper />
            <Rapper />
            <Rapper />
          </div>
          <div className=''>
            <Fields />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
