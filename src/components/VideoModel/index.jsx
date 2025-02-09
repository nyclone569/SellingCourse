import React from 'react'
import {createPortal} from 'react-dom'

export const  VideoModel = ({maskCloseable, visible, onCancel}) => {
  const onMaskeClick = () => {
    if(maskCloseable) onCancel?.()
  }
  
  if(!visible) return null
  return createPortal(
    <div className="popup-video" onClick={onMaskeClick}>
        <div className="wrap">
          <iframe width="800px" height="450px" src="https://www.youtube.com/embed/m7FlLehvM2A?si=EuY8EJUWxJMn0geI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="close" onClick={onCancel} />
    </div>,
    document.body

  )
}
