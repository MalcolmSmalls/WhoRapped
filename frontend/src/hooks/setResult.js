import * as Action from '../redux/result_reducer'
import { useDispatch, useSelector } from 'react-redux'
import { postServerData } from '../helper/helper'

export const PushAnswer = (result, questionAns) => async (dispatch) => {
  try {
    // await dispatch(Action.pushResultAction(result))
    await dispatch(Action.compareAnswerAction([result, questionAns]))
  } catch (error) {
    console.log(error)
  }
}

export const ResetChoice = () => async (dispatch) => {
  try {
    dispatch(Action.resetChoiceAction())
  } catch (error) {
    console.log(error)
  }
}

//insert user data, use this hook in result.js. i want to actually use this everytime a question is answered.. and to localstorage if user isn't logged in

export const usePublishResult = (resultData) => {
  const { result, username } = resultData(async () => {
    try {
      if (result !== [] && !username)
        throw new Error("Couldn't get credentials")
      await postServerData('/api/result', resultData, (data) => data)
    } catch (error) {
      console.log(error)
    }
  })()
}
