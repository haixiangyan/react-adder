import React, {FC, useEffect, useState} from 'react'
import Adder from './components/Adder'
import {fetchRecordList} from './api'
import './App.css'
import RecordList from './components/RecordList'
import {TRecord} from './components/Record'

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
      <h1 style={{textAlign: 'center'}}>
        <div>
          很牛逼的一个计算器 v1.0
        </div>
        <img
          src="https://us.123rf.com/450wm/larryrains/larryrains1901/larryrains190100027/118556689-laptop-a-vector-cartoon-illustration-of-a-computer-laptop-.jpg?ver=6"
          width="200px"/>
      </h1>

      <h2>加法</h2>
      <Adder/>

      <h2>记录</h2>
      <RecordList recordList={recordList}/>
    </div>
  )
}

export default App
