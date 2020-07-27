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
      <span>Fuck1</span>

      <span style={{marginRight: 8}}>{id}.</span>

      <span>{first}</span>
      <span>+</span>
      <span>{second}</span>
      <span>=</span>
      <span>{result}</span>

      <span>Fuck2</span>
    </li>
  )
}

export default Record