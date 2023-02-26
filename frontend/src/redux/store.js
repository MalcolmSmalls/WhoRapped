import { combineReducers, configureStore } from '@reduxjs/toolkit'

// Call Reducers

import questionReducer from './question_reducer'
import settingsReducer from './settings_reducer'
import resultReducer from './result_reducer'

// Combine multiple reducers
const rootReducer = combineReducers({
  // initialize this questions property with question reducer
  questions: questionReducer,
  settings: settingsReducer,
  result: resultReducer,
  // combineReducers will combine reducers and return that as a central store
})

// creates store with reducer. initialize reducer property with above rootReducers which is a combination of reducers.
export default configureStore({ reducer: rootReducer })
