import { Bars, Rapper } from './components'
// import Rapper from './components/Rapper'

import { useState } from 'react'

function App() {
  return (
    <div className='App flex justify-center flex-col'>
      <h1 className='font-PermanentMarker text-5xl'>Who Rapped</h1>
      <Rapper />
    </div>
  )
}

export default App
