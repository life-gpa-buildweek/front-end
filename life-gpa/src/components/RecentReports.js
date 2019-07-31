import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'



const RecentReportContainer = styled.div`
    width: 30%;
    height: 100%;
    background: white;
    border-left: 1px solid #d0d0d0;
    display: flex;
    flex-direction: column;
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