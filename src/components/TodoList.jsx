import { useState } from 'react'

const TodoList = () => {
  const [todoList, setTodoList] = useState(['first-thing', 'second-thing'])
  const [inputContent, setInputContent] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (inputContent.trim() === '') return
    setTodoList([...todoList, inputContent])
    setInputContent('')
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

        {todoList.map((thing, index) => (
          <div
            className="todo-list d-flex align-items-center justify-content-sb"
            key={index}
          >
            <div className="d-flex align-items-center">
              <button type="radio" className="icon-radio btn-md"></button>
              <p className="text-light pd-l-3">{thing}</p>
            </div>
            <button className="icon-play-sm btn-md opacity-half" />
          </div>
        ))}
      </section>
    </>
  )
}

export default TodoList
