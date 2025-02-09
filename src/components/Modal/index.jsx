import React from 'react'
import { createPortal } from 'react-dom'

export const Modal = ({maskCloseable, visible, onCancel, children}) => {
    const onMaskeClick = () => {
        if(maskCloseable) onCancel?.()
      }
      
      if(!visible) return null
  return createPortal(
    <div className="popup-video" onClick={onMaskeClick}>
        <div className="wrap">
          {children}
        </div>
        <div className="close" onClick={onCancel} />
    </div>,
    document.body
  )
}
