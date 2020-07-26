import * as React from 'react'
import {FC} from 'react'
import GreenBadge from './GreenBadge'
import YellowBadge from './YellowBadge'
import RedBadge from './RedBadge'

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
    const remain = result % 3

    const Mapper: { [key: number]: FC } = {
      0: GreenBadge,
      1: RedBadge,
      2: YellowBadge
    }

    const Comp = Mapper[remain]

    return <Comp/> || null
  }

  return (
    <li className="record">
      <span style={{marginRight: 16}}>{id}.</span>

      <span>{first}</span>
      <span>+</span>
      <span>{second}</span>
      <span>=</span>
      <span>{result}</span>

      <span>{renderBadge()}</span>
    </li>
  )
}

export default Record
