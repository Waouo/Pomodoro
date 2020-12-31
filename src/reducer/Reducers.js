import {
  TIMER_STATE_ON,
  TIMER_STATE_OFF,
  TODO_LIST_ADD_TODO,
  TODO_LIST_REMOVE_TODO,
  TODO_LIST_CHANGE_TODO,
  MODE_WORK,
  MODE_BREAK,
  RUNNING_TODO,
} from '../constant/constants'

const timerStateReducer = (state = { timeState: 'off' }, action) => {
  switch (action.type) {
    case TIMER_STATE_ON:
      return { timeState: 'on' }
    case TIMER_STATE_OFF:
      return { timeState: 'off' }
    default:
      return state
  }
}

const modeReducer = (state = { mode: 'work' }, action) => {
  switch (action.type) {
    case MODE_WORK:
      return { mode: 'work' }
    case MODE_BREAK:
      return { mode: 'break' }
    default:
      return state
  }
}

const runningTodoReducer = (state, action) => {
  switch (action.type) {
    case RUNNING_TODO:
      return action.payload
    default:
      return state
  }
}

const todoListReducer = (state = { todoList: [] }, action) => {
  switch (action.type) {
    case TODO_LIST_ADD_TODO:
      return [...state.todoList, action.payload]
    case TODO_LIST_REMOVE_TODO:
      return action.payload
    case TODO_LIST_CHANGE_TODO:
      return action.payload
    default:
      return state
  }
}

export { todoListReducer, modeReducer, timerStateReducer, runningTodoReducer }
