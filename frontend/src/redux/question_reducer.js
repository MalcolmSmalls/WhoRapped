// Initialize store

import { createSlice } from '@reduxjs/toolkit'

// Create reducer function to pass in store.js

export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    // Store questions from db in queue
    queue: [],
    history: [],
    trace: 0,
  },
  // Reducers allow you to specificy and dispatch an action to change value of the store. You can only change the value of store with an action.
  reducers: {
    // startExamAction property which is a function (functions automatically create the actions). With action you can get the user input value and with state you can get the current state.
    startExamAction: (state, action) => {
      return {
        // Update the value of the state. Use the spread operator to update initalState rather than create a new property
        ...state,
        // action.payload gets the user value and updates the queue. Payload will be question this will update queue with question which is questions from data.
        queue: action.payload,
        trace: Math.floor(Math.random() * action.payload.length),
        // answer: question[state.trace].answer,
      }
    },
    moveNextAction: (state) => {
      const answeredQuestion = state.queue[state.trace]
      const newArr = state.queue.filter(
        (item) => item !== state.queue[state.trace]
      )

      return {
        ...state,
        history: [...state.history, answeredQuestion],
        queue: newArr,
        trace: Math.floor(Math.random() * newArr.length),
      }
    },
    // I want to eventually reset every 30 days or so.
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        history: [],
        trace: 0,
      }
    },
  },
})

// You get actions from questionReducer. This returns an object which you destructure into startExamAction. With that variable action you can dispatch to update the store
export const { startExamAction, moveNextAction, resetAllAction } =
  questionReducer.actions

//
export default questionReducer.reducer
