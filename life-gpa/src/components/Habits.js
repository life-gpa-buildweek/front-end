import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {completedHabit, getChartData, deleteHabit} from '../actions'



const HabitContainer = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    margin-bottom: 20px;
    background: white
    border-radius: 5px;
    box-shadow: 0px 20px 17px -20px rgba(112,112,112,0.2);

    ${props => props.type.completed ?  
        `
            background: #ffd764;
            box-shadow: 0px 20px 15px -20px rgba(255,215,100,0.8); 
        `
      :
        null
    }

    ${props => props.type.completed === false && props.type.default === false ?  
        `
            background: #eb6e3d;
            box-shadow: 0px 20px 15px -20px rgba(235,110,61,0.8); 
        `
      :
        null
    }
`

const P = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;

    ${props => props.type.completed ?  
        `
            color: black;
            text-decoration: line-through solid white;
        `
      :
        null
    }

    ${props => props.type.completed === false && props.type.default === false ?  
        `
            color: white;
            text-decoration: line-through solid black;
        `
      :
        null
    }
`

const ButtonContainer = styled.div`
    width: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const YButton = styled.button`
    border-radius: 15px;
    border: 1px solid #8e8e8e;
    background: transparent;
    color: #8e8e8e;
    width: 30px;
    height: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: .9em;
    font-weight: 600;
    cursor: pointer;

    ${props => props.type.completed ?  
        `
            border: 1px solid white;
            background: white;
            color: black;
        `
      :
        null
    }

    ${props => props.type.completed === false && props.type.default === false ?  
        `
            border: 1px solid white;
            background: transparent;
            color: white;
        `
      :
        null
    }
`

const NButton = styled.button`
    border-radius: 15px;
    border: 1px solid #8e8e8e;
    background: transparent;
    color: #8e8e8e;
    width: 30px;
    height: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: .9em;
    font-weight: 600;
    cursor: pointer;

    ${props => props.type.completed ?  
        `
            border: 1px solid white;
            background: transparent;
            color: white;
        `
      :
        null
    }

    ${props => props.type.completed === false && props.type.default === false ?  
        `
            border: 1px solid white;
            background: white;
            color: black;
        `
      :
        null
    }
`

const DButton = styled.button`
    border-radius: 15px;
    border: 1px solid #d64541;
    background: #d64541;
    color: white;
    width: 30px;
    height: 30px;
    font-family: 'Open Sans', sans-serif;
    font-size: .9em;
    font-weight: 600;
    cursor: pointer;
`




class Habits extends React.Component {
    constructor() {
        super();
        this.state = {
          completed: false,
          default: true
        };
    }

    componentWillMount() {
        if (this.props.completed) {
            this.setState({completed: true})
        }
    }

    completedHandler = event => {
        event.preventDefault();
        this.setState({completed: true, default: false})
        const points = 100 / this.props.habits.length
        const completionPoints = Math.round(points)
        const completed = true
        const habitTitle = this.props.title
        const id = this.props.id
        const userId = this.props.userId
        const categoryId = this.props.categoryId

        this.props.completedHabit(id, habitTitle, categoryId, userId, completed, completionPoints)
            .then(() => {
                this.props.getChartData()
            })
    }

    uncompletedHandler = event => {
        event.preventDefault();
        this.setState({completed: false, default: false})
        const completionPoints = 0
        const completed = false
        const habitTitle = this.props.title
        const id = this.props.id
        const userId = this.props.userId
        const categoryId = this.props.categoryId

        this.props.completedHabit(id, habitTitle, categoryId, userId, completed, completionPoints)
            .then(() => {
                this.props.getChartData()
            })
    }

    deleteHandler = event => {
        event.preventDefault()

        const id = this.props.id
        this.props.deleteHabit(id)
    }

    render() {

        return (
            <HabitContainer type={this.state}>
                <P type={this.state}>{this.props.title}</P>
                <ButtonContainer>
                    <YButton type={this.state} onClick={this.completedHandler}>Y</YButton>
                    <NButton type={this.state} onClick={this.uncompletedHandler}>N</NButton>
                    <DButton type={this.state} onClick={this.deleteHandler}>X</DButton>
                </ButtonContainer>
            </HabitContainer>
        );
  }
}



const mapStateToProps = (state) => {
  return {
    habits: state.habits,
  }
}

const mapDispatchToProps = {
    completedHabit,
    getChartData,
    deleteHabit
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Habits)