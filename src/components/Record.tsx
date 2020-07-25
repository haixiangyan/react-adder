import * as React from "react"
import {FC} from "react"

export type TRecord = {
  first: number
  second: number
  result: number
  timestamp: Date | number
}

interface IProps {
  record: TRecord
}

const Record: FC<IProps> = () => {
  return <div>Record</div>
}

export default Record