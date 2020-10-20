import axios from 'axios';
import {
    AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED,
    AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILED
} from './types';


const ROOT_URL = 'https://sampleapi.com/api'

export const login = (payload) => async dispatch => {

    const response = await axios.post(`${ROOT_URL}/login`, payload);

    if (response.status === 200) {
        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: response.data
        })
    } else {
        dispatch({
            type: AUTH_LOGIN_FAILED,
            payload: response.data
        })
    }
}

export const logout = (payload) => async dispatch => {

    const response = await axios.post(`${ROOT_URL}/logout`, payload);

    if (response.status === 200) {
        dispatch({
            type: AUTH_LOGOUT_SUCCESS,
            payload: response.data
        })
    } else {
        dispatch({
            type: AUTH_LOGOUT_FAILED,
            payload: response.data
        })
    }
}