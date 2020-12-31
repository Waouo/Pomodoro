import { useContext, useState } from 'react'
import ContextStore from '../ContextStore'
import { v4 as uuid } from 'uuid'

const TodoList = () => {
  const { todoList, setTodoList } = useContext(ContextStore)
  const [inputContent, setInputContent] = useState('')

  const addTodo = (e) => {
    e.preventDefault()

    if (inputContent.trim() === '') return

    const newThing = {
      id: uuid(),
      inputContent,
    }

    setTodoList({ ...todoList, newThing })
    setInputContent('')
  }

  const removeTodo = (id) => {
    const newList = todoList.filter((thing) => thing.id !== id)

    setTodoList(newList)
  }

  return (
    <>
      <section className="todo-section d-flex justify-content-center">
        <form className="new-todo d-flex justify-content-sb" onSubmit={addTodo}>
          <input
            type="text"
            placeholder="ADD A NEW MiSSION..."
            className="todo-input text-light bg-transparent"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
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
                  onClick={() => removeTodo(thing.id)}
                />
                <p className="text-light pd-l-3">{thing.text}</p>
              </div>
              <button className="icon-play-sm btn-md opacity-half" />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default TodoList
