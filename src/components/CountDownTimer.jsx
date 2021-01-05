/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  TIMER_STATE_ON,
  TIMER_STATE_OFF,
  MODE_WORK,
  MODE_BREAK,
  TODO_LIST_REMOVE_TODO,
  DONE_LIST_ADD_DONE,
  DONE_LIST_PLUS_DONE_COUNTER,
} from '../constant/constants'
import { v4 as uuid } from 'uuid'

const CountDownTimer = () => {
  const [countDownSecond, setCountDownSecond] = useState(3)

  const dispatch = useDispatch()

  const timerState = useSelector((state) => state.timerState)

  const mode = useSelector((state) => state.mode)

  const todoList = useSelector((state) => state.todoList)

  const doneList = useSelector((state) => state.doneList)

  let countDownTimer

  useEffect(() => {
    if (timerState === 'on') {
      const startTime = Date.now()

      countDownTimer = setTimeout(() => {
        const pastSeconds = (Date.now() - startTime) / 1000

        const remain = countDownSecond - pastSeconds

        setCountDownSecond(remain >= 0 ? remain : 0)
      }, 100)
    } else {
      clearTimeout(countDownTimer)
    }

    if (countDownSecond <= 0) {
      dispatch({ type: TIMER_STATE_OFF })

      setCountDownSecond(3)

      if (mode === 'work') {
        dispatch({ type: MODE_BREAK })

        const removedFirstTodoList = todoList.filter((_, index) => index !== 0)

        dispatch({ type: TODO_LIST_REMOVE_TODO, payload: removedFirstTodoList })

        /** Add done list */
        const existedDoneIndex = doneList.findIndex(
          (x) => x.text === todoList[0].text
        )

        console.log(existedDoneIndex)
        if (existedDoneIndex > -1) {
          let colonDoneList = [...doneList]

          colonDoneList[existedDoneIndex].counter += 1

          console.log(colonDoneList)
          dispatch({
            type: DONE_LIST_PLUS_DONE_COUNTER,
            payload: colonDoneList,
          })
        } else {
          const newDone = {
            id: uuid(),
            text: todoList[0].text,
            counter: 1,
          }
          dispatch({ type: DONE_LIST_ADD_DONE, payload: newDone })
        }
      } else {
        dispatch({ type: MODE_WORK })
      }
    }

    return () => clearTimeout(countDownTimer)
  }, [timerState, countDownSecond, mode, todoList])

  const toggleTimer = () => {
    timerState === 'off'
      ? dispatch({ type: TIMER_STATE_ON })
      : dispatch({ type: TIMER_STATE_OFF })
  }

  const icon = timerState === 'on' ? 'icon-pause' : 'icon-play'

  const calcPercentage = (time) =>
    (Math.round((countDownSecond / time) * 10000) / 100).toString()

  const progressPercentage =
    mode === 'work' ? calcPercentage(1500) : calcPercentage(300)

  const progressBarStyle = {
    width: progressPercentage + '%',
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <button className={`${icon} btn-lg`} onClick={toggleTimer}></button>
        <h2 className="clock-display text-light">
          {new Date(countDownSecond * 1000).toISOString().substr(14, 5)}
        </h2>

        <h2 className="title text-light">{todoList[0].text}</h2>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={progressBarStyle} />
      </div>
    </>
  )
}

export default CountDownTimer
