import React from 'react'
import { Link } from 'react-router-dom'
import Main from './Main'

export default function Warning() {
  return (
    <div>
      <h1>Warning</h1>
      <Link to={'main'}>Let's Gooo!</Link>
      <Link to='http://google.com'>No Way</Link>
    </div>
  )
}
