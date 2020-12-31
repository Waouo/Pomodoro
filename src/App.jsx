import ReactDom from 'react-dom'
import HomeScreen from './screens/HomeScreen'
import { useState } from 'react'
import {Provider} from 'react-redux'
import store from './store'

const App = () => {
  const [selectedThing, setSelectedThing] = useState({})
  const [timerState, setTimerState] = useState('work') // timerState: work | break
  const [todoList, setTodoList] = useState([
    { id: '0', text: 'first to do ' },
    { id: '1', text: 'second to do' },
  ])
  
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  )
}

const root = document.getElementById('root')
ReactDom.render(<App />, root)
