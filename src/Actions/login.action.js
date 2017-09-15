import {showSpinner, hideSpinner} from './spinner.action'
import { USER_LOGIN_INPROGRESS, USER_LOGIN_SUCCESS} from './action.type'

const loginInProgress = (user) => {
    return {
        type: USER_LOGIN_INPROGRESS,
        user
    }
}

const loginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS, 
        user
    }
}

export const login = (user) => {
    return dispatch => {
        dispatch(loginInProgress(user));
        dispatch(showSpinner(''));
        
        setTimeout(() => {
            dispatch(loginSuccess(user));
            dispatch(hideSpinner());
        }, 2000);
    };
}
