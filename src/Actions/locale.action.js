import {LOCALE_CHANGE_LANGUAGE} from './action.type'

export const changeLanguage = language => {
    return {
        type: LOCALE_CHANGE_LANGUAGE,
        language
    }
}