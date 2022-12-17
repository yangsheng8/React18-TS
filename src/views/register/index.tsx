import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import MainLayout from '@/layouts/mainLayout'

interface IProps {
  children?: ReactNode
}

const Register: FC<IProps> = () => {
  return (
    <MainLayout>
      <div>Register</div>
    </MainLayout>
  )
}

export default memo(Register)
