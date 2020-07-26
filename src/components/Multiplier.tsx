import * as React from 'react'
import {useState} from 'react'
import {postRecord} from '../api'

interface IProps {
}

export const mul = (first: number, second: number): number => {
  return first * second
}

const Multiplier: React.FC<IProps> = () => {
  const [first, setFirst] = useState<number>(0)
  const [second, setSecond] = useState<number>(0)
  const [result, setResult] = useState<number>(0)

  const onAdd = async () => {
    const result = mul(first, second)

    setResult(result)

    await postRecord({first, second, result})
  }

  return (
    <main>
      <input onChange={e => setFirst(Number(e.target.value))} type="text"/>
      <span>x</span>
      <input onChange={e => setSecond(Number(e.target.value))} type="text"/>
      <button style={{margin: '0 8px', paddingLeft: 12, paddingRight: 12}}
              onClick={onAdd}>
        =
      </button>
      <span>{result}</span>
    </main>
  )
}

export default Multiplier
