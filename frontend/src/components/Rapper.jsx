import React from 'react'
import { nas } from '../assets'

export default function Rapper(props) {
  function handleSelect() {
    console.log('radio selected')
  }
  return (
    <div className='test container flex flex-col  w-14 justify-center items-center'>
      <label>
        <input
          type='radio'
          name='answer'
          value={props.artist}
          id={props.artist}
          onChange={handleSelect}
        ></input>
        <div
          className='container rounded-full h-16 w-16 bg-contain border-4 border-gray-300 bg-center'
          style={{ backgroundImage: `url(${props.photo})` }}
        ></div>
      </label>
      <label
        htmlFor={props.artist}
        className='uppercase font-Poppins h-10 text-center'
      >
        {props.artist}
      </label>
    </div>
  )
}
