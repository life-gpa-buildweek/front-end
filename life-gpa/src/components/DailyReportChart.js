import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import { connect } from 'react-redux'
import styled from 'styled-components'



const ChartContainer = styled.div`
    position: relative;
    width: 
`





class DailyReportChart extends React.Component {
    constructor() {
        super();
        this.state = {
          hide: true,
        };
    }

    render() {

        return (
            <ChartContainer>
            </ChartContainer>
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
)(DailyReportChart)