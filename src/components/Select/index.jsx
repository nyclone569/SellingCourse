import React, { useEffect, useState } from 'react'
import { ErrorText } from '../Input/style'

export const Select = ({value, onChange, error, placeholder, options}) => {
    const [open, setOpen] = useState(false)
    const [label, setLabel] = useState(() =>{
        return options.find(e => e.value === value)
    })

    useEffect(() => {
        const onClose = () => setOpen(false)
        window.addEventListener('click', onClose)
        return () => {
            window.removeEventListener('click', onClose)
        }
    }, [])

    const onOpen = (ev) => {
        ev.stopPropagation()
        setOpen(true)
    }

    const _onChange = (index) => {
        return (ev) => {
            ev.preventDefault()
            setLabel(options[index].label)
            onChange?.({target: {value: options[index].value}})
        }
    }
  return (
    <>
        <div className="select">
            <div className="head" onClick={onOpen}>{label || placeholder}</div>
            <div className="sub" style={{display: open ? 'block' : 'none'}}>
                {
                    options.map((e, i) => <a onClick={_onChange(i)} key={e.value} href="#">{e.label}</a> )
                }
            </div>
        </div>
        {error && <ErrorText>{error}</ErrorText>}
    </>
  )
}
