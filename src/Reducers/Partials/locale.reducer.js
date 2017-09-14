import counterpart from 'counterpart'
import {LOCALE_CHANGE_LANGUAGE} from '../../Actions/action.type'

const initialState = {
    language: 'en',
    avaliableLanguages: ['en', 'de']
}

export const locale = (state = initialState, action) => {
    if(action.type === LOCALE_CHANGE_LANGUAGE) {
        counterpart.setLocale(action.language);
        return {...state, language : action.language};
    }
    
    return state;
}