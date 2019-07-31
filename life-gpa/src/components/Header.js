import React from 'react'
import { connect } from 'react-redux'
import styled, {css} from 'styled-components'

import Logo from './logo-word-yellow.svg'


const HeaderContainer = styled.div`
    display: flex;
    height: 5%;
    background: #000;
    padding: 20px 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const H3 = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    color: white;
`




class Header extends React.Component {
    render() {

        return (
            <HeaderContainer>
                <img src={Logo} style={{width: 200 + "px"}} alt="logo" />
                <H3>{this.props.email}</H3>
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