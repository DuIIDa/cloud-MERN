import axios from 'axios'

import { store } from 'react-notifications-component';

import { setUser, setFiles, addFile, deleteFileAction,
     addUploadFile, removeUploadFile, changeUploadFile,
     showLoader, hideLoader } from './index'

import {notificationProgres, notificationSuccess, 
    notificationError, defaultNotfication} from '../components/notification/index'

//USER
//Указываем куда будет отправляться запрос и что должны получить
export const registration = (email, password) => {
   return async dispatch => {
        try {
            const response = await axios.post('http://192.168.43.24:5000/api/auth/registration', {
                email,
                password
            })

            store.addNotification({
                ...notificationSuccess(response.data.message)
            })
            dispatch(login(email, password))
        } catch (error) {
            console.log('error: ', error);
                if(error.response) {
                    store.addNotification({
                        ...notificationError(error.response.data.message)
                    })
                } else {
                    store.addNotification({
                        ...defaultNotfication('Unknown Error!')
                    })    
                }  
            
        }
   }
}

export const login = (email, password, staySystem = false) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://192.168.43.24:5000/api/auth/login', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            
            if(staySystem)
                localStorage.setItem('token', response.data.token)
            else  
                sessionStorage.setItem('token', response.data.token)
            
        } catch (error) {
            console.log('error: ', error);
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }  

        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const response = await axios.get('http://192.168.43.24:5000/api/auth/auth', 
            {headers:{Authorization:`Bearer ${token}`}}
            )

            dispatch(setUser(response.data.user))
            debugger
            localStorage.getItem('token') && localStorage.setItem('token', response.data.token)
            sessionStorage.getItem('token') && sessionStorage.setItem('token', response.data.token)

        } catch (error) {
            console.log('error: ', error);
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }  
            localStorage.removeItem('token')
        }
    }
}

//FILES
export const getFiles = (dirId) => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const response =  await axios.get(`http://192.168.43.24:5000/api/files${dirId ? `?parent=${dirId}` : ''}`, {
                headers:{Authorization:`Bearer ${token}`}
            })
            dispatch(setFiles(response.data))
        } catch (error) {
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }  
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export const createDir = (dirId, name) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const response =  await axios.post(`http://192.168.43.24:5000/api/files`,{
                name, 
                type: 'dir', 
                parent: dirId
            }, {
                headers:{Authorization:`Bearer ${token}`}
            })
            dispatch(addFile(response.data))
        } catch (error) {
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }  
        }
    }
}

export const uploadFile = (file, dirId) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const formData = new FormData()
            formData.append('file', file)

            if(dirId) {
                formData.append('parent', dirId )
            }
    
            let uploadFile = {name: file.name, progress: 0, id: Date.now()}
            dispatch(addUploadFile(uploadFile))

            store.addNotification({
                id: uploadFile.id,
                ...notificationProgres(uploadFile),
                onRemoval: (_id, _removedBy) => {
                    dispatch(removeUploadFile(uploadFile.id))
                }
            })

            const response =  await axios.post(`http://192.168.43.24:5000/api/files/upload`, 
            formData,
            {
                headers:{Authorization:`Bearer ${token}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                

                    if (totalLength) {                    
                        uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        dispatch(changeUploadFile(uploadFile))
                    }
                }
            })

            dispatch(addFile(response.data))

            setTimeout(() => {
                store.removeNotification(uploadFile.id)
            }, 2000);

        } catch (error) {
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }  
        }
    }
}

export const downloadFile = async (file) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    const response = await fetch(`http://192.168.43.24:5000/api/files/download?id=${file._id}`,{
        headers: {
            Authorization: `Bearer ${token}`
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

export const deleteFile = (file) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const response = await axios.delete(`http://192.168.43.24:5000/api/files/delete?id=${file._id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
            })

            dispatch(deleteFileAction(file._id))
            store.addNotification({
                ...notificationSuccess(response.data.message)
            })
        } catch (error) {
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }          
        }
    }

}

export const searchFiles = (search) => {
    return async dispatch => {
        try {
            const token = localStorage.getItem('token') || sessionStorage.getItem('token')
            const response = await axios.get(`http://192.168.43.24:5000/api/files/search?search=${search}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
            })

            dispatch(setFiles(response.data))
        } catch (error) {
            if(error.response) {
                store.addNotification({
                    ...notificationError(error.response.data.message)
                })
            } else {
                store.addNotification({
                    ...defaultNotfication('Unknown Error!')
                })    
            }          
        } finally {
            dispatch(hideLoader())
        }
    }

}