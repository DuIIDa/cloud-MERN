import {SET_USER, LOGOUT, SET_FILES, 
    SET_СURRENT_DIR, ADD_FILE, SET_POPUP_DISPLAY, 
    PUSH_TO_STACK, DELETE_FILE,
    ADD_UPLOAD_FILE, REMOVE_UPLOAD_FILE, CHANGE_UPLOAD_FILE,
    SHOW_LOADER, HIDE_LOADER} from '../constants/index'

// USER
export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})

// FILES
export const setFiles = files => ({ type: SET_FILES, payload: files})
export const setCurrentDir = dir => ({ type: SET_СURRENT_DIR, payload: dir})
export const addFile = file => ({ type: ADD_FILE, payload: file})
export const setPopupDisplay = display =>  ({ type: SET_POPUP_DISPLAY, payload: display})
export const pushToStack = dir =>  ({ type: PUSH_TO_STACK, payload: dir})
export const deleteFileAction = dirId =>  ({ type: DELETE_FILE, payload: dirId})

// UPLOAD
export const addUploadFile = file => ({type: ADD_UPLOAD_FILE, payload: file})
export const removeUploadFile = fileId => ({type: REMOVE_UPLOAD_FILE, payload: fileId})
export const changeUploadFile = payload => ({type: CHANGE_UPLOAD_FILE, payload: payload})

// LOADER

export const showLoader = () =>({type: SHOW_LOADER})
export const hideLoader = () =>({type: HIDE_LOADER})