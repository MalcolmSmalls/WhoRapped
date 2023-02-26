import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Call Reducers

import questionReducer from './question_reducer'
import settingsReducer from './settings_reducer'
import resultReducer from './result_reducer'

const rootReducer = combineReducers({
  questions: questionReducer,
  settings: settingsReducer,
  result: resultReducer,
})

export default configureStore({ reducer: rootReducer })
