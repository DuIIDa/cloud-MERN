import {SET_FILES, SET_СURRENT_DIR, 
    ADD_FILE, SET_POPUP_DISPLAY} from '../constants/index'

const initialState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none'
}

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILES: return {...state, files: action.payload}
        case SET_СURRENT_DIR: return {...state, currentDir: action.payload}
        case ADD_FILE: return {...state, files: [...state.files, action.payload]}
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload} 
        default:
            return state
    }
}