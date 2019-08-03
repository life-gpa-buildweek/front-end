import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import { connect } from 'react-redux'
import styled, {css} from 'styled-components'



const ChartContainer = styled.div`
    position: relative;
`

const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 10em;
    font-weight: 400;
    text-align: center;
    position: absolute;
    top: -60%;
    left: 40%;

    ${props => props.C && css`
        left: 38%;
    `}

    ${props => props.F && css`
        color: #d64541;
    `}
`





class DailyReportChart extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

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

        let grade;

        if (this.props.completed <= 100 && this.props.completed >= 90) {
            grade = <P>A</P>
        } else if (this.props.completed <= 89 && this.props.completed >= 80) {
            grade = <P>B</P>
        } else if (this.props.completed <= 79 && this.props.completed >= 70) {
            grade = <P C>C</P>
        } else if (this.props.completed <= 69 && this.props.completed >= 60) {
            grade = <P>D</P>
        } else if (this.props.completed <= 50) {
            grade = <P F>F</P>
        }

        return (
            <ChartContainer>
                <Doughnut height={250} width={500} data={donutData} options={donutOptions}/>
                {grade}
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