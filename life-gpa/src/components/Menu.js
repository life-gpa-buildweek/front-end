import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import dashboardIcon from './main-icon.svg'
import categoriesIcon from './categories-icon.svg'
import habitsIcon from './habits-icon.svg'



const Img = styled.img`
    width: 90px;
    border-radius: 45px;
`

const MenuContainer = styled.div`
    position: relative;
    width: 10%;
    height: 100%;
    background: white;
    border-right: 1px solid #d0d0d0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProfilePic = styled.div`
    position: absolute;
    top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ButtonContainer = styled.div`
    width: 90%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
`

const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin:40px 0;
    cursor: pointer;
`




class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
          hide: true,
        };
    }

    render() {

        return (
            <MenuContainer>
                <ProfilePic>
                    <Img src={this.props.profilePic} alt="profile" />
                </ProfilePic>

                <ButtonContainer>
                    <ButtonDiv>
                        <img src={dashboardIcon} style={{width: 30 + "px"}} alt="dashboard icon" />
                    </ButtonDiv>

                    <ButtonDiv>
                        <img src={categoriesIcon} style={{width: 33 + "px"}} alt="categories icon" />
                    </ButtonDiv>

                    <ButtonDiv>
                        <img src={habitsIcon} style={{width: 33 + "px"}} alt="habits icon" />
                    </ButtonDiv>
                </ButtonContainer>
            </MenuContainer>
        );
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.user,
    profilePic: state.user.userImgUrl
  }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)