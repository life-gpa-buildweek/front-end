import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './App.css'
import LoginPic from './login-pic.png'
import LogoWord from './logo-word.svg'
import { loginUser } from '../actions'



const LaunchScreen = styled.div`
    display: flex;
    width: 100vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ContainerLeft = styled.div`
    display: flex;
    width: 700px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContainerRight = styled.div`
    display: flex;
    width: 375px;
    background-color: #fff;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 350px;
`

const Img = styled.img`
    margin: 40px 0 25px 0;
`

const H3 = styled.h3`
    color: #000000;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0 10px 50px;
`

const FormInputContainer = styled.div`
    margin: 0 40px 15px;
`

const InputSize = styled.div`
    background: #fafafa;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #262626;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 14px;
    position: relative;
    -webkit-appearance: none;
    width: 100%;
    border: 1px solid #efefef;
`

const InputInner = styled.div`
    height: 45px;
    -webkit-box-flex: 1;
    flex: 1 0 0;
    padding: 0;
    position: relative;
    margin: 0;
    min-width: 0;
    text-align: left;
`

const Label = styled.label`
    color: #999;
    font-size: 12px;
    height: 36px;
    left: 8px;
    line-height: 36px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-overflow: ellipsis;
    -webkit-transform-origin: left;
    transform-origin: left;
    -webkit-transition: -webkit-transform ease-out .1s;
    transition: transform ease-out .1s;
    transition: transform ease-out .1s,-webkit-transform ease-out .1s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    -webkit-transform: scale(.83333) translateY(-10px);
    transform: scale(.83333) translateY(-10px)
`

const Input = styled.input`
    background: #e6e6e6;
    width: 100%;
    border: 0;
    -webkit-box-flex: 1;
    flex: 1 0 0px;
    margin: 0;
    outline: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    font-size: 17px;
    padding: 21px 0 4px 8px!important;
`

const ShowOutterContainer = styled.div`
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 100%;
    vertical-align: middle;
`

const ShowInnerContainer = styled.div`
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    margin-left: 8px;
`

const ShowButton = styled.button`
    font-size: 14px;
    line-height: 18px;
    outline: 0!important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: 0 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    font-weight: 600;
    padding: 5px 9px;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    color: #262626;
    display: inline;
`

const LoginButtonContainer = styled.div`
    align-content: stretch;
    align-items: stretch;
    justify-content: flex-start;
    flex:0 0 auto;
    margin:8px 40px;
`

const LoginButton = styled.button`
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 1.3px;
    line-height: 18px;
    outline: 0!important;
    background: 0 0;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    font-weight: 600;
    margin: 35px 0 15px 0;
    padding: 10px;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    background-color: #ffd764;
    border: 1px solid #ffd764;
    border-radius: 6px;
    color: #000;
    position: relative;
`




class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            show: false,
        };
    }

    inputHandler = event => {
        event.preventDefault();

        this.setState({ 
            ...this.state, 
            [event.target.name]: event.target.value})
    }

    showHandler = event => {
        event.preventDefault();
        if (this.state.show === false) {
            this.setState({show: true})
        } else {
            this.setState({show: false})
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const {username, password} = this.state
        this.props.loginUser(username, password)
            .then(() => {
                this.props.history.push('/main')
            })
            .catch(err => {
                throw new Error(err)
            })
        
    }


    render() {
        return (
            <LaunchScreen>
                <ContainerLeft>
                    <div>
                        <img src={LoginPic} alt="Login Screen" />
                    </div>
                </ContainerLeft>

                <ContainerRight>
                    <Form onSubmit={this.handleSubmit}>
                        <Img src={LogoWord} style={{width: 215 + 'px'}} alt="Logo" />

                        <H3>Sign up and change your life today!</H3>

                        <FormInputContainer>
                            <InputSize>
                                <InputInner>
                                    <Label>Username</Label>
                                    <Input
                                        aria-required="true" 
                                        autoCapitalize="off" 
                                        autoCorrect="off" 
                                        maxLength="75" 
                                        name="username" 
                                        type="text" 
                                        value={this.state.username}
                                        onChange={this.inputHandler}
                                    />
                                </InputInner>
                            </InputSize>
                        </FormInputContainer>

                        <FormInputContainer>
                            <InputSize>
                                <InputInner>
                                    <Label>Password</Label>
                                    <Input
                                        aria-required="true" 
                                        autoCapitalize="off" 
                                        autoCorrect="off"
                                        name="password" 
                                        type={this.state.show === false ? "password" : "text"} 
                                        value={this.state.password}
                                        onChange={this.inputHandler}
                                    />
                                </InputInner>

                                <ShowOutterContainer>
                                    <ShowInnerContainer>
                                        <ShowButton 
                                            type="button"
                                            onClick={this.showHandler}
                                        >
                                            {this.state.show === false ? "Show" : "Hide"}
                                        </ShowButton>
                                    </ShowInnerContainer>
                                </ShowOutterContainer>
                            </InputSize>
                        </FormInputContainer>

                        <LoginButtonContainer>
                                <LoginButton type="submit">
                                    Sign Up
                                </LoginButton>      
                        </LoginButtonContainer>
                    </Form>
                </ContainerRight>
            </LaunchScreen>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      gettingHabits: state.gettingHabits
    }
}
  
const mapDispatchToProps = {
    loginUser
}
  
export default withRouter(
    connect(
          /* mapStateToProps goes here */
        mapStateToProps,
        mapDispatchToProps
    )(Login)
)