import React from 'react'
import { ErrorText, InputStyle } from './style'
import classNames from 'classnames'

export default function Input({className, error, type='text', ...props}) {
  return (
    <InputStyle className={classNames(className, {error})} >
        <input type={type} {...props}/>
        {error && <ErrorText>{error}</ErrorText>}
    </InputStyle>
  )
}
