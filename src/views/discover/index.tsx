import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
import MainLayout from '@/layouts/mainLayout'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <MainLayout>
      <Link to="/discover/recommend"> 推荐</Link>
      <Link to="/discover/ranking"> 排行榜</Link>
      <Link to="/discover/songs"> 歌单</Link>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </MainLayout>
  )
}

export default memo(Discover)
