import React from 'react'
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components'

import './App.css'
import SignUp from './SignUp'
import Login from './Login'



const LaunchScreen = styled.div`
    display: flex;
    width: 100vh;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InsideContainer = styled.div`
    display: flex;
    width: 700px;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class App extends React.Component {
    render() {
        return (
            <LaunchScreen>
                <InsideContainer>
                    <div>
                        <img src="" alt="logo" />
                    </div>

                    <div>
                        <Link to="/sign-up">
                            <button>Create Account</button>
                        </Link>

                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                </InsideContainer>
                
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/login" component={Login} />
            </LaunchScreen>
        )
    }
}

export default App