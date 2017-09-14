import { combineReducers } from 'redux'

import {authenticate} from './Partials/login.reducer'
import {spinner} from './Partials/spinner.reducer'
import {locale} from './Partials/locale.reducer'

export const registrator = combineReducers({
        authenticate, 
        spinner, 
        locale
    });