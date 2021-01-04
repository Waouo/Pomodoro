import {
  TIMER_STATE_ON,
  TIMER_STATE_OFF,
  TODO_LIST_ADD_TODO,
  TODO_LIST_REMOVE_TODO,
  TODO_LIST_CHANGE_TODO,
  MODE_WORK,
  MODE_BREAK,
  RUNNING_TODO,
  SCREEN_HOME,
  SCREEN_TODO_LIST,
  SCREEN_ANALYTICS,
  SCREEN_MUSIC,
} from '../constant/constants'

const screenReducer = (state = 'home', action) => {
  switch (action.type) {
    case SCREEN_HOME:
      return 'home'
    case SCREEN_TODO_LIST:
      return 'todoList'
    case SCREEN_ANALYTICS:
      return 'analytics'
    case SCREEN_MUSIC:
      return 'music'
    default:
      return state
  }
}

const timerStateReducer = (state = 'off', action) => {
  switch (action.type) {
    case TIMER_STATE_ON:
      return 'on'
    case TIMER_STATE_OFF:
      return 'off'
    default:
      return state
  }
}

const modeReducer = (state = 'work', action) => {
  switch (action.type) {
    case MODE_WORK:
      return 'work'
    case MODE_BREAK:
      return 'break'
    default:
      return state
  }
}

const runningTodoReducer = (state = '', action) => {
  switch (action.type) {
    case RUNNING_TODO:
      return action.payload
    default:
      return state
  }
}

const todoListReducer = (state = [] , action) => {
  switch (action.type) {
    case TODO_LIST_ADD_TODO:
      return [...state, action.payload]
    case TODO_LIST_REMOVE_TODO:
      return action.payload
    case TODO_LIST_CHANGE_TODO:
      return action.payload
    default:
      return state
  }
}

export {
  todoListReducer,
  modeReducer,
  timerStateReducer,
  runningTodoReducer,
  screenReducer,
}
