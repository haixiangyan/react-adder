import React, {FC, useEffect, useState} from 'react'
import Adder from './components/Adder'

import './App.css'
import RecordList from "./components/RecordList"
import {TRecord} from "./components/Record"
import {fetchRecordList} from "./api"

interface IProps {
}

const App: FC<IProps> = () => {
  const [recordList, setRecordList] = useState<TRecord[]>([])

  useEffect(() => {
    fetchRecordList()
      .then(res => setRecordList(res.data.recordList))
      .catch(e => console.error(e))
  }, [])

  return (
    <div className="app">
      <h1 style={{textAlign: 'center'}}>很牛逼的一个计算器 v1.0</h1>

      <h2>加法</h2>
      <Adder/>

      <h2>记录</h2>
      <RecordList recordList={recordList}/>
    </div>
  )
}

export default App
