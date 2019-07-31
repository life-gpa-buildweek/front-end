import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import Header from './Header'
import Menu from './Menu'
import DailyReport from './DailyReport'
import RecentReports from './RecentReports'
import { getHabits } from '../actions'



const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const SectionContainer = styled.section`
    height: 95%;
    display: flex;
    flex-direction: row;
`


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
          hide: true,
        };
    }

    componentDidMount() {
        this.props.getHabits();
    }

    logOut = event => {
        event.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/login');
    }

    hide = event => {
        event.preventDefault();
        this.setState({hide: false})
    }

    render() {
        if (this.props.gettingHabits) {
        // return something here to indicate that you are fetching data
        return <p>Getting your habits...</p>
        }

    return (
        <MainContainer>
            <Header />

            <SectionContainer>
                <Menu />
                <DailyReport />
                <RecentReports />
            </SectionContainer>
        </MainContainer>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.user,
    gettingHabits: state.gettingHabits
  }
}

const mapDispatchToProps = {
  getHabits: getHabits
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Main)
)