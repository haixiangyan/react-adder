import React, {FC, useState} from 'react'
import Adder from './components/Adder/Adder'

import './App.css'
import Logger from "./components/Logger"
import {TRecord} from "./components/Record"

interface IProps {
}

const App: FC<IProps> = () => {
  const [recordList] = useState<TRecord[]>([])

  return (
    <div className="app">
      <h1 style={{textAlign: 'center'}}>很牛逼的一个计算器 v1.0</h1>

      <h2>加法</h2>
      <Adder/>

      <h2>记录</h2>
      <Logger recordList={recordList}/>
    </div>
  )
}

export default App
