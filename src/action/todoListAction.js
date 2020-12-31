


const addTodo = () => {
  dispatch('TODO_LIST_ADD_TODO')
}

const removeTodo = () => {
  dispatch('TODO_LIST_REMOVE_TODO')
}

export { addTodo, removeTodo }
