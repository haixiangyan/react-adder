import * as React from "react"
import {FC} from "react"

export type TRecord = {
  id: number
  first: number
  second: number
  result: number
  timestamp: number
}

interface IProps {
  record: TRecord
}

const Record: FC<IProps> = props => {
  const {id, first, second, result} = props.record

  return (
    <li className="record">
      <span style={{marginRight: 16}}>{id}.</span>

      <span>{first}</span>
      <span>+</span>
      <span>{second}</span>
      <span>=</span>
      <span>{result}</span>
    </li>
  )
}

export default Record