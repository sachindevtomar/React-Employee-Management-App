import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';


export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer
});