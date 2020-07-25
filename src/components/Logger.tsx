import * as React from "react"
import {FC} from "react"
import Record, {TRecord} from "./Record"

interface IProps {
  recordList: TRecord[]
}

const Logger: FC<IProps> = props => {
  const {recordList} = props

  return (
    <ul>
      {recordList.map(record => (
        <Record record={record}/>
      ))}
    </ul>
  )
}

export default Logger