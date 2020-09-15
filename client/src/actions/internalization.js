import {SET_USER, LOGOUT} from '../constants/index'

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = user => ({type: LOGOUT})