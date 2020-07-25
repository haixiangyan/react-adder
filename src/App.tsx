import React, {FC} from 'react'
import Adder from './components/Adder/Adder'

import './App.css'

interface IProps {}

const App: FC<IProps> = () => {
  return (
    <div className="app">
      <h1 style={{textAlign: 'center'}}>很牛逼的一个计算器 v1.0</h1>
      <h2>加法</h2>
      <Adder/>
      {/* 请在这里添加你的减法器 */}
      <h2>减法</h2>
    </div>
  )
}

export default App;
