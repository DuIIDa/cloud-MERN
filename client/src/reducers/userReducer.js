import {SET_USER, LOGOUT} from '../constants/index'

const initialState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        }

        case LOGOUT: {
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        }
        default:
            return state
    }
}