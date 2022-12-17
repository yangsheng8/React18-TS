import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import MainLayout from '@/layouts/mainLayout'

interface IProps {
  children?: ReactNode
}

const SignIn: FC<IProps> = () => {
  return (
    <MainLayout>
      <div>SignIn</div>
    </MainLayout>
  )
}

export default memo(SignIn)
