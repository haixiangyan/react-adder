import * as React from 'react'

interface IProps {
}

const RedBadge: React.FC<IProps> = () => {
  return (
    <span style={{background: 'red'}}>不行</span>
  )
}

export default RedBadge
