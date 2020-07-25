import axios, {AxiosResponse} from 'axios'
import {TRecord} from '../components/Record'

interface IRes {
  message: string
}

interface IAddRecordReq {
  first: number
  second: number
  result: number
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

export const postRecord = async (data: IAddRecordReq): Promise<AxiosResponse<IRes>> => {
  return await request.get('/records/create', {params: data})
}
