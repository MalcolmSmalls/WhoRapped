import React, { useEffect, useState } from 'react'

// useSelector to access state / store value
import { useSelector, useDispatch } from 'react-redux'

// Import custom hook

import { useFetchQuestion } from '../hooks/fetchQuestion'

import { MoveNextQuestion } from '../hooks/fetchQuestion'

import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'

export default function Bars() {
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()
  const [isSelect, setIsSelect] = useState(() => false)

  const [check, setCheck] = useState(undefined)
  let choice = useSelector((state) => state.result.choice)
  const dispatch = useDispatch()

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  )
  const { queue, trace, history } = useSelector((state) => state.questions)

  const state = useSelector((state) => state)

  // useEffect(() => {
  //   console.log(state)
  // })

  function handleSelect(e) {
    console.log('radio selected')
    console.log(e.value)
    setCheck((prevCheck) => e.value)
    setIsSelect((prevIsSelect) => true)
  }

  // randomize trace value by using Move Next Action action
  function handleSubmit() {
    if (queue.length > 0) {
      dispatch(MoveNextQuestion())
      dispatch(PushAnswer(check, questions.answer))
    }
    console.log('Submit click')
  }

  function handleNext() {
    if (queue.length > 0) {
      // add this to next button
      dispatch(MoveNextQuestion())
    }
    console.log('Next click')
  }

  // when answered, needs to eventually check answers one at a time, if wrong display and move on

  if (choice.length > 0) {
    if (choice[0] === history[history.length - 1].answer) {
      console.log('okkk u right')
    } else {
      console.log('wrong asf')
      // console.log(choice[0])
      // console.log(history[history.length - 1])
    }
    // console.log(state)
  }

  //if out of questions, navigate to your charts page which shows your rank and your best ranked artists

  if (queue.length <= 0 && history.length > queue.length) {
    return <Navigate to={'/charts'} replace='true'></Navigate>
    console.log('we outta here baby')
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
                  onChange={(e) => handleSelect(e.target)}
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
          <button
            className='border border-slate-200  rounded-lg p-2 px-5 hover:bg-slate-100/50 hover:border-slate-100/50'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  )
}
