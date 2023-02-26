import { createSlice } from '@reduxjs/toolkit'

export const settingsReducer = createSlice({
  name: 'settings',
  initialState: {
    difficulty: 'easy',
    type: [],
  },
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload
    },
  },
})

export const { setDifficulty } = settingsReducer.actions

export default settingsReducer.reducer
