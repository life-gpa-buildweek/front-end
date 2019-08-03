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
    COMPLETING_HABIT_FAILED,
    GETTING_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILED,
    DELETING_HABIT,
    DELETED_HABIT_SUCCESS,
    DELETED_HABIT_FAILED,
    CHART_DATA
  } from "../actions";
  
  const initialState = {
    user: [],
    newUser: [],
    habits: [],
    categories: [],
    completed: '',
    notCompleted: '',
    registeringUser: false,
    registeredSuccessful: false,
    loggingIn: false,
    gettingHabits: false,
    creatingHabit: false,
    deletingHabit: false,
    completingHabit: false,
    gettingCategories: false,
    error: null
  };

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

        case DELETING_HABIT: {
          return {
            ...state,
            deletingHabit: true
          }
        }

        case DELETED_HABIT_SUCCESS: {
          const deletedHabit = state.habits.filter(habit =>
            habit.id !== action.payload
          )
          return {
            ...state,
            deletingHabit: false,
            habits: deletedHabit,
            error: null
          }
        }

        case DELETED_HABIT_FAILED: {
            return {
              ...state,
              deletingHabit: false,
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

        case CHART_DATA: {
          const getComplete = state.habits.filter((habit) => habit.completed ? + 1 : 0)

          const getNotComplete = state.habits.filter((habit) => !habit.completed ? + 1 : 0)

          const completed = Math.round(getComplete.length / state.habits.length * 100)

          const notCompleted = Math.round(getNotComplete.length / state.habits.length * 100)

          console.log(notCompleted)
          console.log(completed)

          return {
            ...state,
            completed: completed,
            notCompleted: notCompleted,
          }
        }

        case GETTING_CATEGORIES: {
          return {
            ...state,
            gettingCategories: true,
            error: null,
          }
        }

        case GET_CATEGORIES_SUCCESS: {
            return {
              ...state,
              gettingCategories: false,
              categories: action.payload,
              error: null,
            }
        }

        case GET_CATEGORIES_FAILED: {
          return {
            ...state,
            gettingCategories: false,
            error: action.payload
          }
        }
  
        default:
            return state;
    }
  };