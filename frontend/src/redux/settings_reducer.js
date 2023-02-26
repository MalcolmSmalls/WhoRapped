import { createSlice } from '@reduxjs/toolkit'

export const settingsReducer = createSlice({
  name: 'settings',
  initialState: {
    difficulty: 'easy',
    type: [],
  },
})
