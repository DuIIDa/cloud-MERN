import React from 'react'
import {InputStyle} from './inputStyle'

export const Input = (props) => {
    return (
        <InputStyle value={props.value} 
            name={props.name}
            onBlur={(event) => props.onBlur(event.target.value)} 
            onChange={(event) => props.setValue(event.target.value)} 
            type={props.type} 
            placeholder={props.placeholder}/>
    )
}
