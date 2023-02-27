import * as Action from '../redux/result_reducer'
import { useDispatch, useSelector } from 'react-redux'

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result))
  } catch (error) {
    console.log(error)
  }
}
