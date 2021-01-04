import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import {
  TODO_LIST_ADD_TODO,
  TODO_LIST_REMOVE_TODO,
  TODO_LIST_CHANGE_TODO,
  RUNNING_TODO,
} from '../constant/constants'

const TodoList = () => {
  const [input, setInput] = useState('')

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

  const handleAdd = (e) => {
    e.preventDefault()

    if (input.trim() === '') return

    const newTodo = {
      id: uuid(),
      text: input,
    }

    dispatch({ type: TODO_LIST_ADD_TODO, payload: newTodo })
    setInput('')
  }

  const handleRemove = (id) => {
    const removedTodoList = todoList.filter((todo) => todo.id !== id)

    dispatch({ type: TODO_LIST_REMOVE_TODO, payload: removedTodoList })
  }

  return (
    <>
      <section className="todo-section d-flex justify-content-center">
        <form
          className="new-todo d-flex justify-content-sb"
          onSubmit={handleAdd}
        >
          <input
            type="text"
            placeholder="ADD A NEW MiSSION..."
            className="todo-input text-light bg-transparent"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="icon-add btn-md bg-transparent" />
        </form>

        <ul className="todo-list">
          {todoList.map((todo, index) => {
            if (index !== 0)
              return (
                <li
                  key={todo.id}
                  className="todo-thing d-flex align-items-center justify-content-sb"
                >
                  <div className="d-flex align-items-center">
                    <button
                      type="radio"
                      className="icon-radio btn-md"
                      onClick={() => handleRemove(todo.id)}
                    />
                    <p className="text-light pd-l-3">{todo.text}</p>
                  </div>
                  <button
                    className="icon-play-sm btn-md opacity-half"
                    onClick={() => handleSelect(todo)}
                  />
                </li>
              )
          })}
        </ul>
      </section>
    </>
  )
}

export default TodoList
