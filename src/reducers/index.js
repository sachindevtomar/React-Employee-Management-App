import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import HelperReducer from './HelperReducer';


export default combineReducers({
    auth: AuthReducer,
    employee: EmployeeReducer,
    helper: HelperReducer
});
