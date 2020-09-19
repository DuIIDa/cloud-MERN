import {SET_FILES, SET_СURRENT_DIR} from '../constants/index'

const initialState = {
    files: [],
    currentDir: null
}

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILES: return {...state, files: action.payload}
        case SET_СURRENT_DIR: return {...state, currentDir: action.payload}
        default:
            return state
    }
}