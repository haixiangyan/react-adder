import * as React from "react"
import {FC} from "react"
import Record, {TRecord} from "./Record"

interface IProps {
  recordList: TRecord[]
}

const RecordList: FC<IProps> = props => {
  const {recordList} = props

  return (
    <ul className="record-list">
      {recordList.map(record => (
        <Record key={record.id} record={record}/>
      ))}
    </ul>
  )
}

export default RecordList