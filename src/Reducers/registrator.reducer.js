import { combineReducers } from 'redux'

import {authenticate} from './login.reducer'
import {spinner} from './spinner.reducer'

export const registrator = combineReducers({
        authenticate, 
        spinner
    });