import {SPINNER_HIDE, SPINNER_SHOW} from '../Actions/action.type'

const initialState = {
    visible: false
}

export const spinner = (state = initialState, action) => {

    switch(action.type){
        case SPINNER_SHOW: {
            return {...state, visible: true};
        }
        case SPINNER_HIDE: {
            return {...state, visible: false};
        }
        default: return state;
    }

}