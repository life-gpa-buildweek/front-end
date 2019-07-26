import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateSignUp = (props) => {
    const {component: Component, ...rest} = props
    return(
        <Route {...rest} render={() => {
            const registered = this.props.registeredSuccessful
            
            return registered ? <Component /> : <Redirect to="/sign-up" />
        }} />
    )
}

const mapStateToProps = state => ({
    registeredSuccessful: state.registeredSuccessful
})

export default connect(
    mapStateToProps,
    null
) (PrivateSignUp)