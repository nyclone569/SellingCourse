import React from 'react'
import { ButtonStyle } from './style'
import { LoadingOutlined } from '@ant-design/icons';

export default function Button({Loading, children}) {
  return (
    <ButtonStyle disabled={Loading} className="btn main rect gap-3">
    {Loading && <LoadingOutlined style={{fontSize: 20}}/>}
    {children}
    </ButtonStyle>
  )
}
