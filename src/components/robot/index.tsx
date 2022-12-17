import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface RobotProps {
  children?: ReactNode
  id: number
  name: string
  email: string
}

const Robot: FC<RobotProps> = ({ id, name, email, children }) => {
  return (
    <li>
      <img className="bg-red-900" src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{children}</p>
    </li>
  )
}
export default memo(Robot)
