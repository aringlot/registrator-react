import {USER_LOGOUT, USER_LOGIN_SUCCESS, USER_LOGIN_INPROGRESS} from '../Actions/action.type'

const authentication = { 
    isAuthenticated : false, 
    isBeingAuthenticated: false,
    user: {} 
}

export const authenticate = (state = authentication, action) => {
    switch(action.type){
        case USER_LOGIN_INPROGRESS:
            return Object.assign({}, state, {
                    isBeingAuthenticated: true, 
                    user: action.user
                });
        
        case USER_LOGIN_SUCCESS:{
            return {...state, isBeingAuthenticated: false, isAuthenticated: true }
        }

        case USER_LOGOUT:
            return Object.assign({}, state, {
                    isAuthenticated: false,
                    user: {}
                });

        default: return state;
    }
}