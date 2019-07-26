import React from 'react'
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components'

import './App.css'
import LoginPic from './login-pic.png'
import PrivateSignUp from './PrivateSignUp'



const LaunchScreen = styled.div`
    display: flex;
    width: 100vh;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerLeft = styled.div`
    display: flex;
    width: 700px;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerRight = styled.div`
    display: flex;
    width: 700px;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class SignUp extends React.Component {
    render() {
        return (
            <LaunchScreen>
                <ContainerLeft>
                    <div>
                        <img src={LoginPic} alt="Login Screen" />
                    </div>
                </ContainerLeft>

                <ContainerRight>
                    <form onSubmit={}>
                        <img src={} alt="Logo" />

                        <div className="input-inner">
                            <label>Full Name</label>
                            <input
                                aria-required="true" 
                                autoCapitalize="off" 
                                autoCorrect="off" 
                                maxLength="75" 
                                name="fullName" 
                                type="text" 
                                value={this.state.fullName}
                                onChange={this.inputHandler}
                            />
                        </div>

                        <div className="input-inner">
                            <label>Email</label>
                            <input
                                aria-required="true" 
                                autoCapitalize="off" 
                                autoCorrect="off" 
                                maxLength="75" 
                                name="email" 
                                type="text" 
                                value={this.state.email}
                                onChange={this.inputHandler}
                            />
                        </div>


                        <div className="password-input-inner">
                            <label>Password</label>
                            <input
                                aria-required="true" 
                                autoCapitalize="off" 
                                autoCorrect="off"
                                name="password" 
                                type={this.state.show === false ? "password" : "text"} 
                                value={this.state.password}
                                onChange={this.inputHandler}
                            />
                        </div>
                        <div className="show-outter-container">
                            <div className="show-inner-container">
                                <button 
                                    type="button"
                                    onClick={this.showHandler}
                                >
                                    {this.state.show === false ? "Show" : "Hide"}
                                </button>
                            </div>
                        </div>

                        <div className="login-button-container">
                            <Link to="/"> // ADD path //
                                <button type="submit">
                                    <div className="login">Log In</div>
                                </button>
                            </Link>        
                        </div>
                    </form>
                </ContainerRight>
                
                <PrivateSignUp exact path="/" component={SignUp} />
            </LaunchScreen>
        )
    }
}

export default SignUp