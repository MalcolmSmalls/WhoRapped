import { useDispatch, useSelector } from 'react-redux'

export default function Result() {
  const dispatch = useDispatch()
  const {
    questions: queue,
    result: { result, userId },
  } = useSelector()
  return (
    <div>
      <h1>Results</h1>
      <span>Username</span>
      <span>Username's Top Artist</span>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
