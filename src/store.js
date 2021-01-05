import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  timerStateReducer,
  modeReducer,
  todoListReducer,
  doneListReducer,
  runningTodoReducer,
  screenReducer,
} from './reducer/Reducers'

const reducer = combineReducers({
  timerState: timerStateReducer,
  mode: modeReducer,
  todoList: todoListReducer,
  doneList: doneListReducer,
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
    { id: 1, text: 'FIRST THING TO DO' },
    { id: 2, text: 'SECOND THING TO DO' },
  ],
  doneList: [
    { id: 3, text: 'FIRST THING TO DO', counter: 1 },
    { id: 4, text: 'SECOND THING TO DO', counter: 1 },
  ],
}

const store = createStore(reducer, initialState, composeWithDevTools())

export default store
