import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SimpleBar from 'simplebar-react'
import {createHabit} from '../actions'

import 'simplebar/dist/simplebar.min.css';
import Habits from './Habits'
import Categories from './Categories'
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
    margin-bottom: 50px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: start;
`

const GraphContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const P = styled.p`
    margin-bottom: 30px;
`

const HabitsContainer = styled.div`
    width: 100%;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const H3Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Form = styled.form`
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
    width: 90%;
    flex-direction: column;

    ${props => props.type === 'false' ?  
        `
            display: none;
            opacity: 0;
        `
      :
        null
    }

    ${props => props.type === 'true' ?  
        `
            display: flex;
        `
      :
        null
    }
`

const FormInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content space-evenly;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
`

const InputInner = styled.div`
    height: 45px;
    padding: 0;
    position: relative;
    margin: 0;
    width: 300px;
    text-align: left;
`

const Input = styled.input`
    background: #fafafa;
    width: 100%;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    margin: 0;
    outline: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    font-size: 17px;
    padding: 16px 0 9px 8px!important;
`

const LoginButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin:8px 40px;
`

const LoginButton = styled.button`
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 1.3px;
    line-height: 18px;
    outline: 0!important;
    background: 0 0;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    font-weight: 600;
    margin: 35px 0 15px 0;
    padding: 10px;
    text-align: center;
    text-transform: inherit;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    width: 40%;
    background-color: #ffd764;
    border: 1px solid #ffd764;
    border-radius: 6px;
    color: #000;
    position: relative;
`

const Select = styled.select`
    height: 100%;
    width: 100%;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 17px;
    padding: 10px 0 9px 8px!important;
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

const HabitListP = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3em;
    font-weight: 400;
    text-align: center;
    color: #b9b9b9;
`



class DailyReport extends React.Component {
    constructor() {
        super();
        this.state = {
          hide: true,
          addHabit: false,
          habitTitle: '',
          categoryId: '1',
          category: '',
        };
    }

    inputHandler = event => {
        event.preventDefault();

        this.setState({ 
            ...this.state, 
            [event.target.name]: event.target.value
        })
    }

    showHandler = event => {
        event.preventDefault()

        if (this.state.addHabit) {
        this.setState({addHabit: false})
        } if (this.state.addHabit === false) {
            this.setState({addHabit: true})
        }
    }

    formSubmit = event => {
        event.preventDefault()

        const habitTitle = this.state.habitTitle
        const id = this.state.categoryId
        const categoryId = parseInt(id)
        this.props.createHabit(habitTitle, categoryId)
            .then(() => {
                this.setState({habitTitle: ''})
            })
    }

    render() {

        return (
            <SimpleBar style={dailyReportContainer}>
                <ChartContainer>
                    <HeaderContainer>
                        <h1>Your Daily Report</h1>
                    </HeaderContainer>
                    <GraphContainer>
                        <P>Today's Grade</P>
                        <DailyReportChart />
                    </GraphContainer>
                </ChartContainer>
                <HabitsContainer>
                    <TitleContainer>
                        <H3Container>
                            <H3>Did you...</H3>
                            <Button onClick={this.showHandler}>Add More Habits</Button>
                        </H3Container>
                        <Form type={this.state.addHabit.toString()} onSubmit={this.formSubmit}>
                            <p>Add your new habit below </p>
                            <FormInputContainer>
                                    <InputInner>
                                        <Input
                                            aria-required="true" 
                                            autoCapitalize="off" 
                                            autoCorrect="off" 
                                            maxLength="75" 
                                            name="habitTitle" 
                                            type="text"
                                            placeholder="Enter Habit Title"
                                            value={this.state.habitTitle}
                                            onChange={this.inputHandler}
                                        />
                                    </InputInner>

                                    <InputInner>
                                        <Select value={this.state.categoryId} onChange={(e) => this.setState({categoryId: e.target.value})}>
                                            {this.props.categories.map(category => 
                                                <Categories
                                                    id={category.id}
                                                    categoryTitle={category.categoryTitle}
                                                    color={category.color}
                                                    userId={category.userId}
                                                    key={category.id}
                                                />
                                            )}
                                        </Select>
                                    </InputInner>
                            </FormInputContainer>

                            <LoginButtonContainer>
                                <LoginButton type="submit">
                                    Add Habit
                                </LoginButton>      
                            </LoginButtonContainer>
                        </Form>
                    </TitleContainer>
                    <HabitsList>
                        {this.props.habits.length === 0
                            ? <HabitListP>Looks as if you have yet to start any Habits, click the 'Add More Habits' button to get started.</HabitListP>
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
    habits: state.habits,
    categories: state.categories
  }
}

const mapDispatchToProps = {
    createHabit
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DailyReport)