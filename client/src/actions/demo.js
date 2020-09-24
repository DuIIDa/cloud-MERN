import axios from 'axios'
import {setUser} from './index'
import { setFiles, addFile } from './internalization'

//USER
//Указываем куда будет отправляться запрос и что должны получить
export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        })

        alert(response.data.message)
    } catch (error) {
        console.log('error: ', error);
        alert(error.response.data.message)
        
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.log('error: ', error);
            alert(error.response.data.message)

        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth', 
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )

            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.log('error: ', error);
            alert(error.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

//FILES
export const getFiles = (dirId) => {
    return async dispatch => {
        try {
            const response =  await axios.get(`http://localhost:5000/api/files${dirId ? `?parent=${dirId}` : ''}`, {
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setFiles(response.data))
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const createDir = (dirId, name) => {
    return async dispatch => {
        try {
            const response =  await axios.post(`http://localhost:5000/api/files`,{
                name, 
                type: 'dir', 
                parent: dirId
            }, {
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addFile(response.data))
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}