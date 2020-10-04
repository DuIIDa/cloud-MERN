import {ADD_UPLOAD_FILE, REMOVE_UPLOAD_FILE, CHANGE_UPLOAD_FILE} from '../constants/index'

const initialState = {
    files: []
}

export default function uploadReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_UPLOAD_FILE: return {...state, files: [...state.files, action.payload]}
        case REMOVE_UPLOAD_FILE: return {...state, files: [...state.files.filter(file => file.id !== action.payload)]}
        case CHANGE_UPLOAD_FILE: return {
            ...state, 
            files: [...state.files.map(file => file.id === action.payload.id
                ? {...file, progress: action.payload.progress}
                : {...file}
                )]}
        default:
            return state
    }
}