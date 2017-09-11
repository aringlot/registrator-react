import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import {registrator} from './Reducers/registrator.reducer'

import {routes} from './config/route.config'
import {RoutedView} from './Components/Core/routed-view.widget'

import {Header} from './Components/Header/header.widget'
import { Spinner } from './Components/Spinner/spinner.component'

let store = createStore(
  registrator,
  applyMiddleware(thunkMiddleware)
);

const Root = () => (
  <Provider store={store}>
    <Router>
        <div>
        <Header routes={routes} />
        {routes.map((route, i) => (
            <RoutedView key={i} {...route}/>
        ))}
        <Spinner />
        </div>
    </Router>
  </Provider>
)

export {Root}