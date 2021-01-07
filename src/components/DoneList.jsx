import { useDispatch, useSelector } from 'react-redux'
import { DONE_LIST_REMOVE_DONE } from '../constant/constants'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const DoneList = ({ color, classIconRadio }) => {
  const dispatch = useDispatch()

  const doneList = useSelector((state) => state.doneList)

  const handleRemove = (id) => {
    const removedDoneList = doneList.filter((done) => done.id !== id)

    dispatch({ type: DONE_LIST_REMOVE_DONE, payload: removedDoneList })
  }

  return (
    <TransitionGroup component={'ul'} className="todo-list">
      {doneList.map((done) => {
        return (
          <CSSTransition timeout={500} classNames={'animation-fade'} key={done.id}>
            <li
              key={done.id}
              className="todo-thing d-flex justify-content-sb align-items-center"
              style={{ borderBottom: `3px solid ${color}` }}
            >
              <div className="d-flex align-items-center">
                <button
                  className={`${classIconRadio} btn-md`}
                  onClick={() => handleRemove(done.id)}
                />
                <p className="pd-l-3 text-line-through" style={{ color }}>
                  {done.text}
                </p>
              </div>
              <div className="d-flex align-items-center">
                {[...Array(done.counter)].map((_, i) => (
                  <i key={i} className="circle-dark" />
                ))}
              </div>
            </li>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

DoneList.propTypes = {
  color: PropTypes.string.isRequired,
  classIconRadio: PropTypes.string.isRequired,
}

export default DoneList
