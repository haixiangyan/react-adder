import * as React from 'react'

interface IProps {
}

const YellowBadge: React.FC<IProps> = () => {
  return (
    <span style={{background: 'yellow'}}>一般</span>
  )
}

export default YellowBadge
