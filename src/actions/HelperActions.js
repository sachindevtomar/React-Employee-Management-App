import {
    EMPLOYEE_DETAILS_EDIT_MODAL, EMPLOYEE_DETAILS_EDIT_MODAL_ClOSE
} from './types';

export const openEditEmployeeModal = (payload) => dispatch => {
        dispatch({
            type: EMPLOYEE_DETAILS_EDIT_MODAL,
            payload
          })
}

export const closeEditEmployeeModal = (payload) => dispatch => {
        dispatch({
            type: EMPLOYEE_DETAILS_EDIT_MODAL_ClOSE
          })
}
