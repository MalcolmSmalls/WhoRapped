// get server data
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

export async function getServerData(url, callback) {
  const data = await (await axios.get(url))?.data
  return callback ? callback(data) : data
}

//post server

export async function postServerData(url, result, callback) {
  const data = await (await axios.post(url, result))?.data
  return callback ? callback(data) : data
}
