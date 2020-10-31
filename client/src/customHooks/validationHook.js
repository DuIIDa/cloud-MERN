import {useState, useEffect} from 'react';

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLength, setMinLength] = useState(false)
    const [validEmail, setValidEmail] = useState( false)

    const [textError, setTestError] = useState('')
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for(const validation in validations) {
            switch (validation) {
                case 'isEmpty': {
                    if(value){
                        setEmpty(false)
                    } else {
                        setEmpty(true)
                        setTestError('Поле не может быть пустым!')
                        return
                    }
                    break;
                }

                case 'validEmail': {
                    const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
                    if(!reg.test(value)) {
                        setValidEmail(true)
                        setTestError('Email введен неверно!')
                    }else {
                        setValidEmail(false)
                    }
                    break;
                }

                case 'minLength': {
                    if(value.length < validations[validation]) {
                        setMinLength(true)
                        setTestError('Минимальное количество символов 6!')
                    }else {
                        setMinLength(false)
                        return
                    } 
                    break;
                }
            
                default:
                    break;
            }
        }
    }, [value]) // eslint-disable-line react-hooks/exhaustive-deps
    

    useEffect(() => {
        if(isEmpty || minLength || validEmail) {
            setInputValid(true)
        } else {
            setInputValid(false)
        }
    }, [isEmpty, minLength, validEmail])

    return {
        isEmpty,
        validEmail,
        minLength,

        textError,
        inputValid
    }
}


export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDitry] = useState(false)

    const valid = useValidation(value, validations)

    const onChange = (target) => {
        setValue(target)
    }

    const onBlur = (e) => {
        setDitry(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}
