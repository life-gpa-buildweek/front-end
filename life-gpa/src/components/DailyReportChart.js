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
        };
    }

    getData = () => {}

    grade = () => {} 
    

    render() {

        const donutData = {
            labels: [
                'Completed',
                'Not Completed'
            ],
            datasets: [{
                data: [
                    this.props.completed,
                    this.props.notCompleted
                ],
                backgroundColor: [
                    '#ffd764',
                    '#eb6e3d'
                ]
            }]
        };
        
        const donutOptions = {
          responsive: false,
          cutoutPercentage: 75,
          legend: {
              display: false
          }
        };

        return (
            <ChartContainer>
                <Doughnut height={250} width={500} data={donutData} options={donutOptions}/>
            </ChartContainer>
        );
  }
}



const mapStateToProps = (state) => {
  return {
    habits: state.habits,
    completed: state.completed,
    notCompleted: state.notCompleted
  }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyReportChart)