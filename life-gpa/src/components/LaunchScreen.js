import React from 'react'
import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'

import Logo from './logo-big.svg'




const LaunchContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InsideContainer = styled.div`
    display: flex;
    width: 500px;
    height: 600px;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImageContainer = styled.div`
    display: flex;
    position: absolute;
    top: 25%;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
    font-weight: 300;
    letter-spacing: 1px;
    color: white;
    margin-top: 40px;
`

const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    width: 20%;
    top: 55%;
    background: #000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    margin-bottom: 15px;
    width: 290px;
    padding: 12px 0;
    border: none;
    border-radius: 5px;
    font-size: .9em;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;

    ${props => props.primary && css`
    background: #ffd764;
  `}
`

class LaunchScreen extends React.Component {
    render() {
        return (
            <LaunchContainer>
                <InsideContainer>
                    <ImageContainer>
                        <img src={Logo} style={{width: 150 + 'px'}} alt="logo" />
                        <P>Welcome to the new you</P>
                    </ImageContainer>

                    <ButtonContainer>
                        <Link to="/sign-up">
                            <Button primary>Create An Account</Button>
                        </Link>

                        <Link to="/login">
                            <Button>Login</Button>
                        </Link>
                    </ButtonContainer>
                </InsideContainer>
            </LaunchContainer>
        )
    }
}

export default LaunchScreen