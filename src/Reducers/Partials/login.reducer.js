import {USER_LOGOUT, USER_LOGIN_SUCCESS, USER_LOGIN_INPROGRESS} from '../../Actions/action.type'

const authentication = { 
    isAuthenticated : false, 
    isBeingAuthenticated: false,
    user: {} 
}

export const authenticate = (state = authentication, action) => {
    switch(action.type){
        case USER_LOGIN_INPROGRESS:
            return { ...state,
                isAuthenticated: false,
                isBeingAuthenticated: true, 
                user: action.user
            };
        
        case USER_LOGIN_SUCCESS:{

            if(!state.isBeingAuthenticated) throw {action, state, message: 'inappropriate state'};

            return {...state, 
                isBeingAuthenticated: false, 
                isAuthenticated: true 
            }
        }

        case USER_LOGOUT:
            return { ...state,
                isAuthenticated: false,
                isBeingAuthenticated: false,
                user: {}
            };

        default: return state;
    }
}