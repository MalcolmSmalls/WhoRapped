import { createSlice } from '@reduxjs/toolkit'

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    userId: null,
    result: [],
  },
})
