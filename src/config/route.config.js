import {Home} from '../Components/Home/home.widget'
import {AboutUs} from '../Components/AboutUs/about-us.widget'
import {LoginForm} from '../Components/Login/login-form.component'

export const routes = [
    { path: '/home',
      component: Home,
      title: 'Route.Home'
    },
    { path: '/about-us',
      component: AboutUs,
      title: 'Route.About'
    },
    {
        path: '/login',
        component: LoginForm,
        title: 'Route.Login'
    }
  ]