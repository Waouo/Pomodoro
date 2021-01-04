import { useDispatch, useSelector } from 'react-redux'
import {
  TODO_LIST_REMOVE_TODO,
  TODO_LIST_CHANGE_TODO,
  RUNNING_TODO,
} from '../constant/constants'

// eslint-disable-next-line react/prop-types
const TodoList = ({ color }) => {

  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todoList)

  const handleSelect = (selectedTodo) => {
    let colonTodoList = [...todoList]
    let index = colonTodoList.indexOf(selectedTodo)

    ;[colonTodoList[0], colonTodoList[index]] = [
      colonTodoList[index],
      colonTodoList[0],
    ]

    dispatch({ type: TODO_LIST_CHANGE_TODO, payload: colonTodoList })
    dispatch({ type: RUNNING_TODO, payload: selectedTodo })
  }

  const handleRemove = (id) => {
    const removedTodoList = todoList.filter((todo) => todo.id !== id)

    dispatch({ type: TODO_LIST_REMOVE_TODO, payload: removedTodoList })
  }

  return (
      <ul className="todo-list">
        {todoList.map((todo, index) => {
          if (index !== 0)
            return (
              <li
                key={todo.id}
                className="todo-thing d-flex align-items-center justify-content-sb"
                style={{ borderBottom: `3px solid ${color}` }}
              >
                <div className="d-flex align-items-center">
                  <button
                    type="radio"
                    className="icon-radio btn-md"
                    onClick={() => handleRemove(todo.id)}
                  />
                  <p className="pd-l-3" style={{ color }}>
                    {todo.text}
                  </p>
                </div>
                <button
                  className="icon-play-sm btn-md opacity-half"
                  onClick={() => handleSelect(todo)}
                />
              </li>
            )
        })}
      </ul>
  )
}

export default TodoList
