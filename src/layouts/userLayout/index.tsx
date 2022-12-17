import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

interface IProps {
  children?: ReactNode
}

const UserLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}

export default memo(UserLayout)
