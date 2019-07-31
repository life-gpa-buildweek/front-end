/*
  Be sure to import in all of the action types from `../actions`
*/
import {
    REGISTERING_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GETTING_HABITS,
    GET_HABITS_SUCCESS,
    GET_HABITS_FAILED,
    CREATING_HABIT,
    CREATED_HABIT_SUCCESS,
    CREATED_HABIT_FAILED,
    COMPLETING_HABIT,
    COMPLETING_HABIT_SUCCESS,
    COMPLETING_HABIT_FAILED
  } from "../actions";
  
  /*
   Your initial/default state for this project could *Although does not have to* look a lot like this
   {
     smurfs: [],
     fetchingSmurfs: false
     addingSmurf: false
     updatingSmurf: false
     deletingSmurf: false
     error: null
   }
  */
  const initialState = {
    user: [],
    newUser: [],
    habits: [],
    registeringUser: false,
    registeredSuccessful: false,
    loggingIn: false,
    gettingHabits: false,
    creatingHabit: false,
    completingHabit: false,
    error: null
  };
  
  /*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
  export default (state = initialState, action) => {
    switch (action.type) {
  
        case REGISTERING_USER: {
            return {
              ...state,
              registeringUser: true
            }
        }
  
        case REGISTER_USER_SUCCESS: {
            return {
              ...state,
              newUser: action.payload,
              registeringUser: false,
              registeredSuccessful: true,
              error: null,
            }
        }
  
        case REGISTER_USER_FAILED: {
            return {
              ...state,
              registeringUser: false,
              error: action.payload
            }
        }
  
        case LOGGING_IN: {
            return {
              ...state,
              loggingIn: true
            }
        }
  
        case LOGIN_SUCCESS: {
          return {
            ...state,
            loggingIn: false,
            user: action.payload,
            error: null
          }
      }
  
      case LOGIN_FAILED: {
          return {
            ...state,
            loggingIn: false,
            error: action.payload
          }
      }
  
        case GETTING_HABITS: {
            return {
              ...state,
              gettingHabits: true,
              error: null,
            }
        }
  
        case GET_HABITS_SUCCESS: {
            return {
              ...state,
              gettingHabits: false,
              habits: action.payload,
              error: null,
            }
        }

        case GET_HABITS_FAILED: {
          return {
            ...state,
            gettingHabits: false,
            error: action.payload
          }
        }

        case CREATING_HABIT: {
          return {
            ...state,
            creatingHabit: true
          }
        }

        case CREATED_HABIT_SUCCESS: {
          return {
            ...state,
            creatingHabit: false,
            habits: state.habits.concat(action.payload),
            error: null
          }
        }

        case CREATED_HABIT_FAILED: {
            return {
              ...state,
              creatingHabit: false,
              error: action.payload
            }
        }

        case COMPLETING_HABIT: {
          return {
            ...state,
            completingHabit: true
          }
        }

        case COMPLETING_HABIT_SUCCESS: {
          const completedHabit = state.habits.map(habit =>
            habit.id === action.payload.id ? {
              ...habit, 
              completed: action.payload.completed,
              completionPoints: action.payload.completionPoints 
            } 
            : habit
          )
          return {
            ...state,
            completingHabit: false,
            habits: completedHabit,
            error: null
          }
        }

        case COMPLETING_HABIT_FAILED: {
            return {
              ...state,
              completingHabit: false,
              error: action.payload
            }
        }
  
        default:
            return state;
    }
  };