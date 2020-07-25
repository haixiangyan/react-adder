import axios from 'axios'
import {TRecord} from "../components/Record"

const BaseUrl = 'localhost:5000'

const request = axios.create({
  baseURL: BaseUrl
})

export const fetchResultList = async () => {
  return await request.get('/results')
}

export const addResult = async (data: TRecord) => {
  return await request.post('/records', {data})
}