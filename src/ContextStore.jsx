import React from 'react'

const ContextStore = React.createContext({
  timerState: '',
  setTimerState: '',
  todoList: '',
  setTodoList: '',
})

export default ContextStore
