import {SET_USER, LOGOUT, SET_FILES, SET_СURRENT_DIR} from '../constants/index'

//USER
export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})

// FILES
export const setFiles = files => ({ type: SET_FILES, payload: files})
export const setCurrentDir = dir => ({ type: SET_СURRENT_DIR, payload: dir})