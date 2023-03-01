import * as Action from '../redux/result_reducer'
import { useDispatch, useSelector } from 'react-redux'

export const PushAnswer = (result, questionAns) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result))
    await dispatch(Action.compareAnswerAction([result, questionAns]))
  } catch (error) {
    console.log(error)
  }
}
