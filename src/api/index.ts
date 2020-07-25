import axios from 'axios'
import {TRecord} from "../components/Record"

interface IRes<T = {}> {
  message: string,
  data: T
}

const BaseUrl = 'localhost:5000'

const request = axios.create({
  baseURL: BaseUrl
})

export const fetchRecordList = async (): Promise<IRes<TRecord[]>> => {
  return await request.get('/records')
}

export const addRecord = async (data: TRecord): Promise<IRes> => {
  return await request.post('/records', {data})
}