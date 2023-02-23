import { Bars, Rapper } from './components'
// import Rapper from './components/Rapper'

import { useState } from 'react'

function App() {
  return (
    <div className='h-full w-screen flex justify-center flex-col'>
      <h1 className='pt-20 font-PermanentMarker text-5xl self-center text-red-700'>
        Who Rapped
      </h1>
      <Bars />
      <Rapper />
    </div>
  )
}

export default App
