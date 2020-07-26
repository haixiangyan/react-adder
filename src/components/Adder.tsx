import * as React from 'react'
import {useState} from 'react'
import {postRecord} from '../api'

interface IProps {
  onChange: () => void
}

export const add = (first: number): number => {
  return first + 1
}

const Adder: React.FC<IProps> = props => {
  const {onChange} = props

  const [result, setResult] = useState<number>(0)

  const onAdd = async () => {
    const newResult = add(result)

    setResult(newResult)

    await postRecord({
      first: result,
      second: 1,
      result: newResult
    })

    onChange()
  }

  return (
    <main>
      <button onClick={onAdd}>
        +1
      </button>
      <span>{result}</span>
    </main>
  )
}

export default Adder
