import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Logo from './logo-word-yellow.svg'
import Notification from './notifications.svg'


const HeaderContainer = styled.div`
    display: flex;
    height: 5%;
    background: #000;
    padding: 20px 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
`

const H3 = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    margin-left: 15px;
    color: white;
`




class Header extends React.Component {
    render() {

        return (
            <HeaderContainer>
                <img src={Logo} style={{width: 200 + "px"}} alt="logo" />

                <InfoContainer>
                    <img src={Notification} style={{width: 25 + "px"}} alt="logo" />
                    <H3>{this.props.email}</H3>
                </InfoContainer>
            </HeaderContainer>
        );
  }
}


const mapStateToProps = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(
    mapStateToProps,
    null
)(Header)