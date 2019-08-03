import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateSignUp = (props) => {
    const {component: Component, ...rest} = props
    return(
        <Route {...rest} render={() => {
            const token = localStorage.getItem('token')
            
            return token ? <Component /> : <Redirect to="/sign-up" />
        }} />
    )
}

export default PrivateSignUp