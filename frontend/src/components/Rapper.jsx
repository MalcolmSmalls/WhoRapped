import React from 'react'
import { nas } from '../assets'

export default function Rapper(props) {
  return (
    <div className='test container flex flex-col  w-14 justify-center items-center'>
      <label>
        <input type='radio' name='test' value={props.artist}></input>
        <div
          className='container rounded-full h-16 w-16 bg-contain border-4 border-gray-300 bg-center'
          style={{ backgroundImage: `url(${props.photo})` }}
        ></div>
      </label>
      <span className='uppercase font-Poppins h-10 text-center'>
        {props.artist}
      </span>
    </div>
  )
}
