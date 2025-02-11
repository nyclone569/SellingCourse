import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react'
import { ErrorText, InputStyle } from './style'
import classNames from 'classnames'

export const Input = memo(
  forwardRef(({className, error, type='text', ...props}, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => {
        return {
          setValue: (value) => {
            inputRef.current.value = value
          }
        }
    },[])
    return (
      <InputStyle className={classNames(className, {error})} >
          <input ref={inputRef} type={type} {...props}/>
          {error && <ErrorText>{error}</ErrorText>}
      </InputStyle>
    )
  })
)
