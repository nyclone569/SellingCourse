import React from 'react'
import { SkeletonStyle } from './style'

export default function Skeleton({shape='rectangle', width, height, children}) {
  return (
    <SkeletonStyle className={shape} style={{width, height }}>{children}</SkeletonStyle>
  )
}
