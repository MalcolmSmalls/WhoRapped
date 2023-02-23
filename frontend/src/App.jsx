import { Bars, Rapper, Fields } from './components'
// import Rapper from './components/Rapper'

import { useState } from 'react'

function App() {
  return (
    <div className='h-full w-screen flex justify-center flex-col'>
      <h1 className='pt-20 font-PermanentMarker text-5xl self-center text-red-700'>
        Who Rapped
      </h1>
      <div className='flex flex-col items-center mx-auto w-1/2 border gap-5'>
        <Bars />
        <div className='flex gap-5'>
          <Rapper />
          <Rapper />
          <Rapper />
          <Rapper />
          <Rapper />
        </div>
        <div className='flex flex-col gap-5'>
          <Fields />
        </div>
      </div>
    </div>
  )
}

export default App
