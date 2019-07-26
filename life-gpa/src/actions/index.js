import axios from 'axios'

export const REGISTERING_USER = 'REGISTERING_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'
export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const GETTING_USER = 'GETTING_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'
export const GETTING_HABITS = 'GETTING_HABITS'
export const GET_HABITS_SUCCESS = 'GET_HABITS_SUCCESS'
export const GET_HABITS_FAILED = 'GET_HABITS_FAILED'
export const CREATING_HABIT = 'CREATING_HABIT'
export const CREATED_HABIT_SUCCESS = 'CREATED_HABIT_SUCCESS'
export const CREATED_HABIT_FAILED = 'CREATED_HABIT_FAILED'



export function registerUser(user) {
  return(dispatch) => {
      dispatch({type: REGISTERING_USER})

      axios
          .post("https://lifegpa-zach-christy.herokuapp.com/api/register", user)
          .then(res => {
              dispatch({
                  type: REGISTER_USER_SUCCESS,
                  payload: res.data
              })
          })
          .catch(err => {
              dispatch({
                  type: REGISTER_USER_FAILED,
                  payload: err
              })
          })
  }
}

export function loginUser(user) {
  return(dispatch) => {
      dispatch({type: LOGGING_IN})

      axios
          .post("https://lifegpa-zach-christy.herokuapp.com/api/login", user)
          .then(res => {
              dispatch({
                  type: LOGIN_SUCCESS,
                  payload: res.data
              })
          })
          .catch(err => {
              dispatch({
                  type: LOGIN_FAILED,
                  payload: err
              })
          })
  }
}

export function getUser() {
    return(dispatch) => {
        dispatch({type: GETTING_USER})
  
        axios
            .get("https://lifegpa-zach-christy.herokuapp.com/api/users")
            .then(res => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_USER_FAILED,
                    payload: err
                })
            })
    }
}

export function getHabits() {
    return(dispatch) => {
        dispatch({type: GETTING_HABITS})
  
        axios
            .get("")
            .then(res => {
                dispatch({
                    type: GET_HABITS_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_HABITS_FAILED,
                    payload: err
                })
            })
    }
}

export function createHabit(habit) {
    return(dispatch) => {
        dispatch({type: CREATING_HABIT})
  
        axios
            .post("", habit)
            .then(res => {
                dispatch({
                    type: CREATED_HABIT_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: CREATED_HABIT_FAILED,
                    payload: err
                })
            })
    }
}