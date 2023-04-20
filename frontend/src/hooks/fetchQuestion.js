import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getServerData } from '../helper/helper'

// Get all actions into Action variable from question reducer to redux actions

import * as Action from '../redux/question_reducer'

// fetchQuestion Hook to fetch api data and set value to store

// to use a custom hook you must use use then function
export const useFetchQuestion = () => {
  const dispatch = useDispatch()
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  })

  useEffect(() => {
    setGetData((prevData) => ({ ...prevData, isLoading: true }))
    // async function to fetch backend data and call it ()
    ;(async () => {
      try {
        const [{ questions }] = await getServerData(
          `/api/questions`,
          (data) => data
        )
        console.log(questions)
        if (questions.length > 0) {
          setGetData((prevData) => ({ ...prevData, isLoading: false }))
          setGetData((prevData) => ({
            ...prevData,
            apiData: questions,
          }))

          // dispatch an action to update the store.
          dispatch(Action.startExamAction(questions))
        } else {
          throw new Error('No Question Available')
        }
      } catch (error) {
        setGetData((prevData) => ({ ...prevData, isLoading: false }))
        setGetData((prevData) => ({ ...prevData, serverError: error }))
      }
    })()

    // specificy dispatch in dependency array so there's no infinite loop
  }, [dispatch])
  return [getData, setGetData]
}

// Move action dispatch function

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction())
  } catch (error) {
    console.log(error)
  }
}
