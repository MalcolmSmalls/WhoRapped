import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import data from '../database/data'

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
    trace: 0,
  })

  useEffect(() => {
    setGetData((prevData) => ({ ...prevData, isLoading: true }))
    // async function to fetch backend data and call it ()
    ;(async () => {
      try {
        let question = await data
        if (question.length > 0) {
          const indx = Math.floor(Math.random() * question.length)
          setGetData((prevData) => ({ ...prevData, isLoading: false }))
          setGetData((prevData) => ({ ...prevData, apiData: question }))
          setGetData((prevData) => ({ ...prevData, trace: indx }))

          // dispatch an action to update the store.
          dispatch(Action.startExamAction(question))
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
