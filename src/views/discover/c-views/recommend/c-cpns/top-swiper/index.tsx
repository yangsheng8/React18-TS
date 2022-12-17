import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useSelector, shallowEqual } from '@/store/hooks'

interface IProps {
  children?: ReactNode
}

const TopSwiper: FC<IProps> = () => {
  /* 从store 中获取数据*/
  const { slideshow } = useSelector(
    (state) => ({
      slideshow: state.recommend.slideshow
    }),
    shallowEqual
  )
  console.log(slideshow.slides)

  return (
    <ul>
      {slideshow.slides.map((item: any, index: number) => {
        return <li key={index}>{item.title}</li>
      })}
    </ul>
  )
}

export default memo(TopSwiper)
