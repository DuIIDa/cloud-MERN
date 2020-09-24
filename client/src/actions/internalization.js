import {SET_USER, LOGOUT, SET_FILES, 
    SET_СURRENT_DIR, ADD_FILE, SET_POPUP_DISPLAY} from '../constants/index'

//USER
export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})

// FILES
export const setFiles = files => ({ type: SET_FILES, payload: files})
export const setCurrentDir = dir => ({ type: SET_СURRENT_DIR, payload: dir})
export const addFile = file => ({ type: ADD_FILE, payload: file})
export const setPopupDisplay = display =>  ({ type: SET_POPUP_DISPLAY, payload: display})