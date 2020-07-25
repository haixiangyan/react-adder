import * as React from 'react'
import {useState} from 'react'
import './index.css'

interface IProps {}

const Adder: React.FC<IProps> = () => {
  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)

  return (
    <main>
      <input onChange={e => setFirst(Number(e.target.value))} type="text"/>
      <span>+</span>
      <input onChange={e => setSecond(Number(e.target.value))} type="text"/>
      <span>=</span>

      <span>{first + second}</span>
    </main>
  )
}

export default Adder
