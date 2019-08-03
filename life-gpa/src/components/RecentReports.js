import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Illustration from './illustration.svg'



const RecentReportContainer = styled.div`
    width: 30%;
    height: 100%;
    padding: 0 70px;
    background: white;
    border-left: 1px solid #d0d0d0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HistoryContainer = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`

const H3Container = styled.div`
    display: flex;
    justify-content: center;
    height: 25%;
`

const PContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 75%;
`

const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3em;
    font-weight: 400;
    text-align: center;
    color: #b9b9b9;
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`





class RecentReports extends React.Component {
    constructor() {
        super();
        this.state = {
          hide: true,
        };
    }

    render() {

        return (
            <RecentReportContainer>
                <HistoryContainer>
                    <H3Container>
                        <h1>Recent Reports</h1>
                    </H3Container>
                    <PContainer>
                        <P>It seems as if we have no history, Let's change that... Start your habits now and create the life that you want!</P>
                    </PContainer>
                </HistoryContainer>
                <ImgContainer>
                    <img src={Illustration} style={{width: 100 + '%'}} alt='complete your daily habits' />
                </ImgContainer>
            </RecentReportContainer>
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
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentReports)