import {SET_FILES, SET_СURRENT_DIR, 
    ADD_FILE, SET_POPUP_DISPLAY, 
    PUSH_TO_STACK, DELETE_FILE} from '../constants/index'

const initialState = {
    files: [],
    currentDir: {
        id: null,
        path: null,
    },
    popupDisplay: 'none',
    dirStack: []
}

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILES: return {...state, files: action.payload}
        case SET_СURRENT_DIR: return {...state, currentDir: action.payload}
        case ADD_FILE: return {...state, files: [...state.files, action.payload]}
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        case PUSH_TO_STACK: return {...state, dirStack: [...state.dirStack, action.payload]}
        case DELETE_FILE: return {... state, files: [...state.files.filter(file => file._id !== action.payload)]}

        default:
            return state
    }
}