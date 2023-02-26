import React, { useEffect, useState } from 'react'

// useSelector to access state / store value
import { useSelector } from 'react-redux'

// Import custom hook

import { useFetchQuestion } from '../hooks/fetchQuestion'

export default function Bars() {
  const [{ isLoading, apiData, serverError, trace }] = useFetchQuestion()
  const [isSelect, setIsSelect] = useState(() => false)

  const questions = useSelector((state) => state.questions.queue[trace])
  const state = useSelector((state) => state)

  useEffect(() => {
    console.log(state)
  })

  function handleSelect() {
    // console.log('radio selected')
    setIsSelect((prevIsSelect) => true)
  }

  if (isLoading) return <h3>isLoading</h3>
  if (serverError) return <h3>{serverError || 'Unknown Error'}</h3>
  return (
    <div>
      {/* Access .question only if it has that property in that object. If there
      are no more questions it won't display. */}
      <div className='font-Poppins mb-3 select-none'>{questions?.question}</div>
      <div className='flex gap-7 pb-10 justify-center'>
        {questions?.choices.map((choice, index) => {
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
      </div>

      {isSelect ? (
        <div className='flex justify-center mb-5'>
          <button className='border border-slate-200  rounded-lg p-2 px-5 hover:bg-slate-100/50 hover:border-slate-100/50'>
            Submit
          </button>
        </div>
      ) : null}
    </div>
  )
}
