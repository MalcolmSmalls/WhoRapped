import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Answers(props) {
  const ref = useRef(null)
  const { queue, trace, history } = useSelector((state) => state.questions)
  const state = useSelector((state) => state)
  useEffect(() => {
    console.log(state)
    const element = ref.current
    if (queue.length > 0) {
      if (
        state.result.choice[0] &&
        state.result.choice[0] !== state.result.choice[1]
      ) {
        if (element.id === state.result.choice[1]) {
          element.className =
            'container rounded-full h-16 w-16 bg-contain border-4 border-green-300 bg-center bg-no-repeat'
        }
      }
      //   if (element.id === 'Jay-Z') {
      //     element.className = 'red'
      //   }
    }
  }, [state])
  return (
    <>
      <div
        className='test container flex flex-col  w-14 justify-center items-center'
        key={props.index}
      >
        <label>
          <input
            type='radio'
            name='answer'
            value={props.artist}
            id={props.artist}
            onChange={(e) => props.handleSelect(e.target)}
          ></input>

          <div
            id={props.artist}
            ref={ref}
            className={`container rounded-full h-16 w-16 bg-contain border-4 border-gray-300 bg-center bg-no-repeat`}
            style={{ backgroundImage: `url(${props.photo})` }}
          ></div>
        </label>
        <label
          htmlFor={props.artist}
          className='uppercase font-Poppins h-10 text-center mt-1'
        >
          {props.artist}
        </label>
      </div>
    </>
  )
}
