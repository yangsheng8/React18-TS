import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <div className="nav">
      <Link to="/register">注册</Link>
      <Link to="/sign-in">登录</Link>
      <Link to="/">首页</Link>
      <Link to="/discover">发现</Link>
    </div>
  )
}

export default memo(AppHeader)
