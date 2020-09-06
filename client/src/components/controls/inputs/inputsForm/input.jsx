import React from 'react'
import {InputStyle} from './inputStyle'

const Input = (props) => {
    return (
        <InputStyle value={props.value} 
            onChange={(event) => props.setValue(event.target.value)} 
            type={props.type} 
            placeholder={props.placeholder}/>
    )
}


export default Input