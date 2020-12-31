import React from 'react'

const ContextStore = React.createContext({
  timerState: '',
  setTimerState: '',
  todoList: [],
  setTodoList: '',
  selectedThing: '',
  setSelectedThing: '',
})

export default ContextStore
