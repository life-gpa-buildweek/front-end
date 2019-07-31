import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SimpleBar from 'simplebar-react'

import 'simplebar/dist/simplebar.min.css';
import Habits from './Habits'
import DailyReportChart from './DailyReportChart'



const dailyReportContainer = {
    width: '60%',
    height: '100%',
    background: '#efefef',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 70px',
    overflowY: 'auto'
}

const ChartContainer = styled.div`
    width: 100%;
    margin-bottom: 70px;
`

const HabitsContainer = styled.div`
    width: 100%;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

const H3 = styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3em;
    font-weight: 600;
    letter-spacing: 1px;
`

const Button = styled.button`
    border-radius: 25px;
    border: 1px solid #8e8e8e;
    background: transparent;
    color: #8e8e8e;
    padding: 8px 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: .7em;
    font-weight: 600;
    cursor: pointer;
`

const HabitsList = styled.ul`
    padding: 0;
`



class DailyReport extends React.Component {
    constructor() {
        super();
        this.state = {
          hide: true,
        };
    }

    render() {

        return (
            <SimpleBar style={dailyReportContainer}>
                <ChartContainer>
                    <h1>Your Daily Report</h1>
                    <div>
                        <p>Today's Grade</p>
                        {/* <DailyReportChart /> */}
                    </div>
                </ChartContainer>
                <HabitsContainer>
                    <TitleContainer>
                        <H3>Did you...</H3>
                        <Button>Add More Habits</Button>
                    </TitleContainer>
                    <HabitsList>
                        {this.props.habits.length === 0
                            ? <h4>You have no Habits, click the Add More Habits button to get started.</h4>
                            : this.props.habits.map(habit => 
                                <Habits
                                    key={habit.id}
                                    title={habit.habitTitle}
                                    id={habit.id}
                                    userId={habit.userId}
                                    categoryId={habit.categoryId}
                                    completed={habit.completed}
                                />
                            )
                        }
                    </HabitsList>
                </HabitsContainer>
            </SimpleBar>
        );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
  return {
    user: state.user,
    habits: state.habits
  }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyReport)