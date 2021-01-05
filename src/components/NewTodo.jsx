import { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import { TODO_LIST_ADD_TODO } from '../constant/constants'

const NewTodo = ({ classTodoInput, classIconAdd, width }) => {
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
    <form
      className="new-todo d-flex justify-content-sb"
      onSubmit={handleAdd}
      style={{ width }}
    >
      <input
        type="text"
        placeholder="ADD A NEW MiSSION..."
        className={`${classTodoInput} bg-transparent`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`${classIconAdd} btn-md bg-transparent`}
      />
    </form>
  )
}

NewTodo.propTypes = {
  classTodoInput: PropTypes.string,
  classIconAdd: PropTypes.string,
  width: PropTypes.string,
}

export default NewTodo
