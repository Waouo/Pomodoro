import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  TODO_LIST_REMOVE_TODO,
  TODO_LIST_CHANGE_TODO,
  RUNNING_TODO,
} from '../constant/constants'

const TodoList = ({ color, classIconRadio, classIconPlay, location }) => {
  const dispatch = useDispatch()

  const { todoList } = useSelector((state) => state)

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
      <TransitionGroup component={'ul'} className="todo-list">
        {todoList.map((todo, index) => {
          if (location.pathname === '/' && index === 0) return
          return (
            <CSSTransition
              timeout={500}
              classNames={'animation-fade'}
              key={todo.id}
            >
              <li
                key={todo.id}
                className="todo-thing d-flex align-items-center justify-content-sb"
                style={{ borderBottom: `3px solid ${color}` }}
              >
                <div className="d-flex align-items-center">
                  <button
                    className={`${classIconRadio} btn-md`}
                    onClick={() => handleRemove(todo.id)}
                  />
                  <p className="pd-l-3" style={{ color }}>
                    {todo.text}
                  </p>
                </div>
                <button
                  className={`${classIconPlay}  btn-md opacity-half`}
                  onClick={() => handleSelect(todo)}
                />
              </li>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
  )
}

TodoList.propTypes = {
  color: PropTypes.string.isRequired,
  classIconRadio: PropTypes.string.isRequired,
  classIconPlay: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}

export default TodoList
