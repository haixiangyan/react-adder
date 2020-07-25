import * as React from "react"
import {FC} from "react"

export type TRecord = {
  first: number
  second: number
  result: number
  timestamp: number
}

interface IProps {
  record: TRecord
}

const Record: FC<IProps> = props => {
  const {first, second, result, timestamp} = props.record

  return (
    <li>
      <span>{first}</span>
      <span>+</span>
      <span>{second}</span>
      <span>=</span>
      <span>{result}</span>

      <span> | </span>
      <span>{new Date(timestamp).toISOString()}</span>
    </li>
  )
}

export default Record