import {
    AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILED,
    AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILED
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    username: '',
    status: 'unauthorized',
};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                username: action.payload.username,
                status: 'authorized',
            }
        case AUTH_LOGIN_FAILED:
            return {
                ...state,
                username: '',
                email: '',
                status: 'unauthorized',
                error: action.payload.error
            }
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                username: '',
                email: '',
                status: 'unauthorized'
            }
        case AUTH_LOGOUT_FAILED:
            return {
                status: 'unauthorized',
                error: action.payload.error
            }
        default:
            return state;
    }
}