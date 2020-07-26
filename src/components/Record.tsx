import * as React from 'react'
import {FC} from 'react'
import RedCross from './Badge/RedCross'
import GreenDollar from './Badge/GreenDollar'

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

  const renderBadge = () => {
    const remainder = result % 2

    const Mapper: { [key: number]: FC } = {
      0: RedCross,
      1: GreenDollar
    }

    const Comp = Mapper[remainder]

    return <Comp/> || <span/>
  }

  return (
    <li className="record">
      <span style={{marginRight: 16}}>{id}.</span>

      <span>{first}</span>
      <span>+</span>
      <span>{second}</span>
      <span>=</span>
      <span>{result}</span>

      {renderBadge()}
    </li>
  )
}

export default Record
