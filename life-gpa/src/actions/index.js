import axios from 'axios'

export const REGISTERING_USER = 'REGISTERING_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILED = 'REGISTER_USER_FAILED'
export const LOGGING_IN = 'LOGGING_IN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const GETTING_HABITS = 'GETTING_HABITS'
export const GET_HABITS_SUCCESS = 'GET_HABITS_SUCCESS'
export const GET_HABITS_FAILED = 'GET_HABITS_FAILED'
export const GETTING_CATEGORIES = 'GETTING_CATEGORIES'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
export const GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED'
export const CREATING_HABIT = 'CREATING_HABIT'
export const CREATED_HABIT_SUCCESS = 'CREATED_HABIT_SUCCESS'
export const CREATED_HABIT_FAILED = 'CREATED_HABIT_FAILED'
export const DELETING_HABIT ='DELETING_HABIT'
export const DELETED_HABIT_SUCCESS = 'DELETED_HABIT_SUCCESS'
export const DELETED_HABIT_FAILED = 'DELETED_HABIT_FAILED'
export const COMPLETING_HABIT = 'COMPLETING_HABIT'
export const COMPLETING_HABIT_SUCCESS = 'COMPLETING_HABIT_SUCCESS'
export const COMPLETING_HABIT_FAILED = 'COMPLETING_HABIT_FAILED'
export const CHART_DATA = 'CHART_DATA'



export function registerUser(username, fullname, email, password) {
  return(dispatch) => {
      dispatch({type: REGISTERING_USER})

      return axios
          .post("https://lifegpa-zach-christy.herokuapp.com/api/register", {username, fullname, email, password})
          .then(res => {
              console.log(res)
            //   localStorage.setItem('token', res)
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

export function loginUser(username, password) {
  return(dispatch) => {
      dispatch({type: LOGGING_IN})

      return axios
          .post("https://lifegpa-zach-christy.herokuapp.com/api/login", {username, password})
          .then(res => {
              console.log(res.data.user)
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('id', res.data.user.id)
              dispatch({
                  type: LOGIN_SUCCESS,
                  payload: res.data.user
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

export function getHabits() {
    return(dispatch) => {
        dispatch({type: GETTING_HABITS})

        const token = localStorage.getItem('token')
        const id = localStorage.getItem('id')
  
        return axios
            .get(`https://lifegpa-zach-christy.herokuapp.com/api/users/habits/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: GET_HABITS_SUCCESS,
                    payload: res.data.habits
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

export function getCategories() {
    return(dispatch) => {
        dispatch({type: GETTING_CATEGORIES})

        const token = localStorage.getItem('token')
  
        axios
            .get(`https://lifegpa-zach-christy.herokuapp.com/api/categories`, {
                headers: {
                    Authorization: token
                }
            })
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_CATEGORIES_FAILED,
                    payload: err
                })
            })
    }
}

export function createHabit(habitTitle, categoryId) {
    return(dispatch) => {
        dispatch({type: CREATING_HABIT})

        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')
  
        return axios
            .post("https://lifegpa-zach-christy.herokuapp.com/api/habits/",
            {
                habitTitle, categoryId, userId
            }, 
            {
                headers: {
                    Authorization: token
                }
            }
            )
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

export function deleteHabit(id) {
    return(dispatch) => {
        dispatch({type: DELETING_HABIT})

        const token = localStorage.getItem('token')
  
        return axios
            .delete(`https://lifegpa-zach-christy.herokuapp.com/api/habits/${id}`,
            {
                headers: {
                    Authorization: token
                }
            }
            )
            .then(res => {
                dispatch({
                    type: DELETED_HABIT_SUCCESS,
                    payload: id
                })
            })
            .catch(err => {
                dispatch({
                    type: DELETED_HABIT_FAILED,
                    payload: err
                })
            })
    }
}

export function completedHabit(id, habitTitle, categoryId, completed, completionPoints) {
    return(dispatch) => {
        dispatch({type: COMPLETING_HABIT})

        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('id')
  
        return axios
            .put(`https://lifegpa-zach-christy.herokuapp.com/api/habits/${id}`, 
            {
                habitTitle, categoryId, userId, completed, completionPoints
            },
            {
                headers: {
                    Authorization: token
                }
            }
            )
            .then(res => {
                dispatch({
                    type: COMPLETING_HABIT_SUCCESS,
                    payload: res.data.habit
                })
            })
            .catch(err => {
                dispatch({
                    type: COMPLETING_HABIT_FAILED,
                    payload: err
                })
            })
    }
}

export function getChartData() {
    return {
        type: CHART_DATA,
    }
}