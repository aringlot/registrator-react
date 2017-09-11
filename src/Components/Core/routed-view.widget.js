import React from 'react'
import {Route} from 'react-router-dom'

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RoutedView = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);