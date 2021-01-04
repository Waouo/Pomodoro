import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { TODO_LIST_ADD_TODO } from '../constant/constants'

const NewTodo = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

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

  return (
    <form className="new-todo d-flex justify-content-sb" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="ADD A NEW MiSSION..."
        className="todo-input text-light bg-transparent"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="icon-add btn-md bg-transparent" />
    </form>
  )
}

export default NewTodo
