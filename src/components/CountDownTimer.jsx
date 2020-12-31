/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
  TIMER_STATE_ON,
  TIMER_STATE_OFF,
  MODE_WORK,
  MODE_BREAK,
} from '../constant/constants'

const CountDownTimer = () => {
  const [countDownSecond, setCountDownSecond] = useState(10)

  const dispatch = useDispatch()

  const timerState = useSelector((state) => state.timerState)

  const mode = useSelector((state) => state.mode)

  let countDownTimer

  //TODO useEffect(() => {
  //   setSelectedThing(todoList[0])
  //   setTodoList(todoList.filter((thing) => thing.id !== todoList[0].id))
  // }, [])

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
      dispatch({type: TIMER_STATE_OFF})
      setCountDownSecond(10)
      mode === 'work'
        ? dispatch({ type: MODE_WORK })
        : dispatch({ type: MODE_BREAK })
    }

    return () => clearTimeout(countDownTimer)
  }, [timerState, countDownSecond])

  const toggleTimer = () => {
    timerState === 'off'
      ? dispatch({ type: TIMER_STATE_ON })
      : dispatch({ type: TIMER_STATE_OFF })
  }

  const icon = timerState === 'on' ? 'icon-pause' : 'icon-play'

  const calcProgressPercentage = (time) =>
    (Math.round((countDownSecond / time) * 10000) / 100).toString()

  const progressPercentage =
    mode === 'work' ? calcProgressPercentage(1500) : calcProgressPercentage(300)

  const progressBarStyle = {
    width: progressPercentage + '%',
  }

  return (
    <>
      {/** preload icon image **/}
      <div
        className="icon-pause"
        style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
      ></div>
      {/** preload icon image **/}
      <section className="clock-section">
        <div className="d-flex align-items-center">
          <button className={`${icon} btn-lg`} onClick={toggleTimer}></button>
          <h2 className="clock-display text-light">
            {new Date(countDownSecond * 1000).toISOString().substr(14, 5)}
          </h2>

          <h2 className="title text-light">fist{/*TODO  */}</h2>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={progressBarStyle} />
        </div>
      </section>
    </>
  )
}

CountDownTimer.propTypes = {
  onTimeUp: PropTypes.func,
  seconds: PropTypes.number,
}

export default CountDownTimer
