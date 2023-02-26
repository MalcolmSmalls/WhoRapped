import React, { useEffect } from 'react'
import data from '../database/data'

import { useSelector } from 'react-redux'

export default function Bars(props) {
  const state = useSelector((state) => state)
  useEffect(() => {
    console.log(state)
  })

  const question = data[1]
  function handleSelect() {
    console.log('radio selected')
  }
  return (
    <div>
      <div className='font-Poppins mb-3 select-none'>{question.question}</div>

      <div className='flex gap-7 pb-10 justify-center'>
        {question.choices.map((choice, index) => {
          return (
            <div
              className='test container flex flex-col  w-14 justify-center items-center'
              key={index}
            >
              <label>
                <input
                  type='radio'
                  name='answer'
                  value={choice.artist}
                  id={choice.artist}
                  onChange={handleSelect}
                ></input>
                <div
                  className='container rounded-full h-16 w-16 bg-contain border-4 border-gray-300 bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${choice.photo})` }}
                ></div>
              </label>
              <label
                htmlFor={choice.artist}
                className='uppercase font-Poppins h-10 text-center mt-1'
              >
                {choice.artist}
              </label>
            </div>
          )
        })}

        {/* <label>
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
          </label> */}
      </div>
    </div>
  )
}
