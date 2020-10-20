import {
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_READ_SUCCESS,
    EMPLOYEE_UPDATE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS,
    EMPLOYEE_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    employeeInfo: {},
    employees: [],
    error: ''
};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMPLOYEE_CREATE_SUCCESS:
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case EMPLOYEE_READ_SUCCESS:
            return {
                ...state,
                employees: action.payload
            }

        case EMPLOYEE_UPDATE_SUCCESS:
            return {
                ...state,
                employeeInfo: action.payload,
                employees: state.employees.map(employee => employee.id === action.payload.id ? action.payload : employee),
            }
        case EMPLOYEE_DELETE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(employee => employee._id !== action.payload),
            }
        case EMPLOYEE_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state;
    }
}
