import { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContextStore from '../ContextStore'
import { v4 as uuid } from 'uuid'
import {
  TODO_LIST_ADD_TODO,
  TODO_LIST_REMOVE_TODO,
} from '../constant/constants'

const TodoList = () => {
  const { todoList, setTodoList, selectedThing, setSelectedThing } = useContext(
    ContextStore
  )
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const handleSelect = (thing) => {
    const newTodoList = todoList.map((todoThing) => {
      if (todoThing.id === thing.id) {
        return selectedThing
      }

      return todoThing
    })

    setTodoList(newTodoList)
    setSelectedThing(thing)
  }

  const handleAdd = (e) => {
    e.preventDefault()

    if (input.trim() === '') {
      return
    }

    const newThing = {
      id: uuid(),
      text: input,
    }

    dispatch({ type: TODO_LIST_ADD_TODO, payload: newThing })
    setInput('')
  }

  const handleRemove = (id) => {
    dispatch({ type: TODO_LIST_REMOVE_TODO, payload: newThing })
    setTodoList(todoList.filter((thing) => thing.id !== id))
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
          {todoList.map((thing) => (
            <li
              key={thing.id}
              className="todo-thing d-flex align-items-center justify-content-sb"
            >
              <div className="d-flex align-items-center">
                <button
                  type="radio"
                  className="icon-radio btn-md"
                  onClick={() => handleRemove(thing.id)}
                />
                <p className="text-light pd-l-3">{thing.text}</p>
              </div>
              <button
                className="icon-play-sm btn-md opacity-half"
                onClick={() => handleSelect(thing)}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default TodoList
