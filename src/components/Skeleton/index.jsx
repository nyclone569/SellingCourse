import React from 'react'
import { SkeletonStyle } from './style'

export default function Skeleton({shape='rectangle', width, height, children, ...props}) {
  return (
    <SkeletonStyle {...props} className={`${shape} ${props.className ?? ''}`} style={{width, height, ...props.style }}>{children}</SkeletonStyle>
  )
}
