import { createSlice, current } from '@reduxjs/toolkit'

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    choice: [],
    results: {},
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    // pushResultAction: (state, action) => {
    //   state.choice.push(action.payload)
    // },
    compareAnswerAction: (state, action) => {
      let val = action.payload[0]
      let ans = action.payload[1]
      state.choice = [val, ans]
      if (val === ans) {
        if (!state.results[ans]) {
          state.results[ans] = [1, 1]
        } else {
          state.results[ans] = [
            state.results[ans][0] + 1,
            state.results[ans][1] + 1,
          ]
        }
      } else {
        if (!state.results[ans]) {
          state.results[ans] = [0, 1]
        } else {
          state.results[ans] = [
            state.results[ans][0],
            state.results[ans][1] + 1,
          ]
        }
      }

      console.log(current(state))
    },
    resetResultAction: () => {
      return { userId: null, result: {} }
    },
  },
})

export const {
  setUserId,
  pushResultAction,
  resetResultAction,
  compareAnswerAction,
} = resultReducer.actions

export default resultReducer.reducer
