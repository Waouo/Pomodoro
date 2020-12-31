import ReactDom from 'react-dom'
import HomeScreen from './screens/HomeScreen'
import ContextStore from './ContextStore'
import { useState } from 'react'

const App = () => {
  const [timerState, setTimerState] = useState('work') // timerState: work | break
  const [todoList, setTodoList] = useState([
    { id: '0', text: 'first to do ' },
    { id: '1', text: 'second to do' },
  ])

  const value = { timerState, setTimerState, todoList, setTodoList }

  return (
    <ContextStore.Provider value={value}>
      <HomeScreen />
    </ContextStore.Provider>
  )
}

const root = document.getElementById('root')
ReactDom.render(<App />, root)
