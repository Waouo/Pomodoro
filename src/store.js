import { createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { todoListReducer } from './reducer/todoListReducer'


  
const reducer = combineReducers({
 todoList: todoListReducer
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
 
}


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
)

export default store
