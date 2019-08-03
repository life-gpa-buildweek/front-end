import React from 'react'
import {Route, Switch} from 'react-router-dom'
import styled, {createGlobalStyle} from 'styled-components'

import LaunchScreen from './LaunchScreen'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main';
import PrivateRoute from './PrivateRoute'


const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap')

    html, body {
        font-family: 'Open Sans', sans-serif !important;
    }

    #root {
        min-height: 100vh;
    }
`

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
`

class App extends React.Component {
    render() {
        return (
            <Container>
                <GlobalStyle />
                <Switch>
                    <Route exact path="/" component={LaunchScreen} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/main" component={Main} />
                </Switch>
            </Container>
        )
    }
}
  
export default App