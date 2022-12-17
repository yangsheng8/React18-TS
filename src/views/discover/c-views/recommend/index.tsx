import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useDispatch } from '@/store/hooks'
import { fetchAnythingDataAction } from './store/recommend'
import TopSwiper from './c-cpns/top-swiper'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  //发起action（获取数据）
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAnythingDataAction('123'))
  }, [])

  /* render 函数返回的jax*/
  return (
    <div>
      <TopSwiper />
      Recommend
    </div>
  )
}

export default memo(Recommend)
