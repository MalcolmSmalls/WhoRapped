import React, { useEffect, useState } from 'react'
import Answers from './Answers'

// useSelector to access state / store value
import { useSelector, useDispatch } from 'react-redux'

// Import custom hook

import { useFetchQuestion } from '../hooks/fetchQuestion'

import { MoveNextQuestion } from '../hooks/fetchQuestion'

import { PushAnswer, ResetChoice } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'

export default function Bars() {
  const [{ isLoading, apiData, serverError }] = useFetchQuestion()
  const [isSelect, setIsSelect] = useState(() => false)

  const [check, setCheck] = useState(undefined)
  const [isRight, setIsRight] = useState('border-gray-300')
  let chosen = useSelector((state) => state.result.choice)
  const dispatch = useDispatch()

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  )
  const { queue, trace, history } = useSelector((state) => state.questions)

  const state = useSelector((state) => state)

  function handleSelect(e) {
    setCheck((prevCheck) => e.value)
    setIsSelect((prevIsSelect) => true)
  }

  console.log(state)
  // randomize trace value by using Move Next Action action
  function handleSubmit() {
    if (queue.length > 0) {
      // dispatch(MoveNextQuestion())
      dispatch(PushAnswer(check, questions.answer))
      if (check === questions.answer) {
        setIsRight('border-green-500')
      } else {
        setIsRight('border-red-500')
      }
    }
  }

  function handleNext() {
    if (queue.length > 0) {
      // add this to next button
      dispatch(MoveNextQuestion())
      dispatch(ResetChoice())
    }
    console.log('Next click')
  }

  // when answered, needs to eventually check answers one at a time, if wrong display and move on

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
            <Answers
              key={index}
              index={index}
              artist={choice.artist}
              photo={choice.photo}
              handleSelect={handleSelect}
              isRight={isRight}
              check={check}
              chosen={chosen}
            />
          )
        })}
      </div>

      {isSelect ? (
        <div className='flex justify-center mb-5'>
          <button
            className='border border-slate-200  rounded-lg p-2 px-5 hover:bg-slate-100/50 hover:border-slate-100/50'
            onClick={chosen.length ? handleNext : handleSubmit}
          >
            {chosen.length ? 'Next' : 'Submit'}
          </button>
        </div>
      ) : null}
    </div>
  )
}
