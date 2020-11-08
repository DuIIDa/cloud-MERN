import React from 'react'
import {InputStyle} from './inputStyle'

export const Input = ({value, name, onBlur, setValue, type, placeholder}) => {
    return (
        <InputStyle value={value} 
            name={name ? name : null}
            onBlur={(event) => onBlur ? onBlur(event.target.value) : {}} 
            onChange={(event) => setValue ? setValue(event.target.value) : {}} 
            type={type ? type : null} 
            placeholder={placeholder ? placeholder : null}/>
    )
}
