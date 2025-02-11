import React, { memo } from 'react'
import styled from 'styled-components'

const ErrorStyle = styled.span`
    color: red;
    position: absolute;
    top: 100%;
    left: 230px;
    font-size: 0.875rem;
    font-style: italic;
`

function Field({ label, error, required, type = 'text', renderInput, ...props }) {
    return (
        <label className='relative'>
            <p>
                {label}{required && <span>*</span>}
            </p>
            {
                renderInput ? renderInput?.(props) : <input {...props} type={type} />
            }
            {error && <ErrorStyle>{error}</ErrorStyle>}
        </label>
    )
}

export default memo(Field, (oldProps, newProps) => {
    return oldProps.value === newProps.value && oldProps.error === newProps.error
})
