import * as React from 'react'
import {useState} from 'react'

interface IProps {
}

export const add = (first: number, second: number): number => {
  return first + second
}

const Adder: React.FC<IProps> = () => {
  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)

  return (
    <main>
      <input onChange={e => setFirst(Number(e.target.value))} type="text"/>
      <span>+</span>
      <input onChange={e => setSecond(Number(e.target.value))} type="text"/>
      <span>=</span>

      <span>{add(first, second)}</span>
    </main>
  )
}

export default Adder
