import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import robotsList from '@/mockdata/robots.json'
import Robot from '@/components/robot'
import MainLayout from '@/layouts/mainLayout'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  return (
    <MainLayout>
      <div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12"
              src="./logo192.png"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        <ul>
          {robotsList.map((r, index: number) => (
            <div key={index}>
              <Robot id={r.id} name={r.name} email={r.email}>
                <span>我是一个xiao插槽</span>
              </Robot>
            </div>
          ))}
        </ul>
      </div>
    </MainLayout>
  )
}

export default memo(Home)
