import axios, {AxiosResponse} from 'axios'
import {TRecord} from "../components/Record"

interface IRes {
  message: string
}

interface IGetRecordListRes extends IRes {
  recordList: TRecord[]
}

const BaseUrl = 'http://localhost:5000'

const request = axios.create({
  baseURL: BaseUrl
})

export const fetchRecordList = async (): Promise<AxiosResponse<IGetRecordListRes>> => {
  return await request.get('/records')
}

export const addRecord = async (data: TRecord): Promise<AxiosResponse<IRes>> => {
  return await request.post('/records', {data})
}