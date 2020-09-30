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

export const uploadFile = (file, dirId) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)

            if(dirId) {
                formData.append('parent', dirId )
            }
            const response =  await axios.post(`http://localhost:5000/api/files/upload`, 
            formData,
            {
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log('total', totalLength)
                    if (totalLength) {
                        let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        console.log(progress)
                    }
                }
            })
            dispatch(addFile(response.data))
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}

export const  downloadFile = async (file) => {
    const response = await fetch(`http://localhost:5000/api/files/download?id=${file._id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })

    if(response.status === 200) {
        const blob = await response.blob() // Подобный физ файла объект
        const downloadUrl = window.URL.createObjectURL(blob) // Создаем URL и преобразовываем файл в обычный вид из бинарного
        const link = document.createElement('a') // Создаем ссылку и делаем имитацию нажатия
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
}