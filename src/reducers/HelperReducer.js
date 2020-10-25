import {
    EMPLOYEE_DETAILS_EDIT_MODAL, EMPLOYEE_DETAILS_EDIT_MODAL_ClOSE
} from '../actions/types';

const INITIAL_STATE = {
    editEmployeeInfo: {}
};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case EMPLOYEE_DETAILS_EDIT_MODAL:
            return {
                ...state,
                editEmployeeInfo:  action.payload
            }
        case EMPLOYEE_DETAILS_EDIT_MODAL_ClOSE:
            return {
                ...state,
                editEmployeeInfo:  {}
            }
        default:
            return state;
    }
}
