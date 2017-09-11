import {SPINNER_SHOW, SPINNER_HIDE} from './action.type'

export const showSpinner = text => { 
    return {
        type: SPINNER_SHOW,
        text: text
    }
}

export const hideSpinner = () => {
    return {
        type: SPINNER_HIDE
    }
}