import React, {FC, useEffect, useState} from 'react'
import Adder from './components/Adder'
import {fetchRecordList} from './api'
import './App.css'
import RecordList from './components/RecordList'
import {TRecord} from './components/Record'
import Subtracter from './components/Subtracter'
import Multiplier from './components/Multiplier'

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
          width="200px"
          alt="计算器"/>
      </h1>

      <h2>加法</h2>
      <Adder/>
      <h2>减法</h2>
      <Subtracter/>
      <h2>乘法</h2>
      <Multiplier/>

      <h2>记录</h2>
      <RecordList recordList={recordList}/>
    </div>
  )
}

export default App
