import { Warning, Main, Login, Charts } from './components'
import { nas, jayz, kanye } from './assets/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Rapper from './components/Rapper'

import { useState } from 'react'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Warning />,
    },
    {
      path: '/login',
      element: <div>Quiz Component</div>,
    },
    {
      path: '/charts',
      element: <div>Result Component</div>,
    },
    {
      path: '/main',
      element: <Main />,
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
