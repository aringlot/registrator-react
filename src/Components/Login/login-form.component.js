import {connect} from 'react-redux'

import {login} from '../../Actions/login.action'
import {loginWidget} from './login.widget'

const mapStateToProps = (state) => {return { isAuthenticated: state.authenticate.isAuthenticated }};

const mapDispathToProps = dispatch => {
    return {
        onSubmit: values => dispatch(login(values))
    }
};

export const LoginForm = connect(mapStateToProps, mapDispathToProps)(loginWidget);

