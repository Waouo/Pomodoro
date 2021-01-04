import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  todoListReducer,
  timerStateReducer,
  modeReducer,
  runningTodoReducer,
  screenReducer,
} from './reducer/Reducers'

const reducer = combineReducers({
  timerState: timerStateReducer,
  mode: modeReducer,
  todoList: todoListReducer,
  runningTodo: runningTodoReducer,
  screen: screenReducer,
})

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : []

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null

// const shippingAddressFormStorage = localStorage.getItem('shippingAddress')
//   ? JSON.parse(localStorage.getItem('shippingAddress'))
//   : {}

const initialState = {
  todoList: [
    { id: 1, text: 'first thing to do' },
    { id: 2, text: 'second thing to do' },
  ],
}

const store = createStore(reducer, initialState, composeWithDevTools())

export default store
