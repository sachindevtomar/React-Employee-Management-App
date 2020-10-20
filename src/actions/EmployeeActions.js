import axios from 'axios';
import {
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_READ_SUCCESS,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_ERROR
} from './types';


const ROOT_URL = 'https://salty-retreat-89693.herokuapp.com'

export const readEmployees = () => async dispatch => {

    const response = await axios.get(`${ROOT_URL}/employees`);

    if (response.status === 200) {
        dispatch({
            type: EMPLOYEE_READ_SUCCESS,
            payload: response.data
        })
    } else {
        dispatch({
            type: EMPLOYEE_ERROR,
            payload: {
                error: 'Failed to Retrieve Employees'
            }
        })
    }
}

export const createEmployee = (payload) => async dispatch => {

    const response = await axios.post(`${ROOT_URL}/employee`, payload);

    if (response.status === 200) {
        dispatch({
            type: EMPLOYEE_CREATE_SUCCESS,
            payload: response.data
        })
    } else {
        dispatch({
            type: EMPLOYEE_ERROR,
            payload: {
                error: 'Failed to Create Employee'
            }
        })
    }
}


export const updateEmployee = (payload) => async dispatch => {

    const response = await axios.put(`${ROOT_URL}/employee/${payload.id}`, payload.data);
    if (response.status === 200) {
        dispatch({
            type: EMPLOYEE_UPDATE_SUCCESS,
            payload: response.data
        })
    } else {
        dispatch({
            type: EMPLOYEE_ERROR,
            payload: {
                error: 'Failed to Update Employee'
            }
        })
    }


}


export const deleteEmployee = (payload) => async dispatch => {

    const response = await axios.delete(`${ROOT_URL}/employee/${payload.id}`);
    if (response.status === 200) {
        dispatch({
            type: EMPLOYEE_DELETE_SUCCESS,
            payload: payload.id
        })
    } else {
        dispatch({
            type: EMPLOYEE_ERROR,
            payload: {
                error: 'Failed to Delete Employee'
            }
        })
    }


}
