import {
  TODO_LIST_ADD_TODO,
  TODO_LIST_REMOVE_TODO,
} from '../constant/constants'

export const todoListReducer = (state, action) => {
  switch (action.type) {
    case TODO_LIST_ADD_TODO:
      return [...state, action.payload]
    case TODO_LIST_REMOVE_TODO:

    default:
      return state
  }
}
