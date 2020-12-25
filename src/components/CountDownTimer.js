import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

let countDownTimer

const CountDownTimer = ({ onTimeUp }) => {
  const [countDownSecond, setCountDownSecond] = useState(1500)
  const [remainSeconds, setRemainSeconds] = useState(1500)
  const [timerState, setTimerState] = useState(false)

  useEffect(() => {
    if (timerState) {
      const startTime = Date.now()
      countDownTimer = setInterval(() => {
        const pastSeconds = (Date.now() - startTime) / 1000
        const remain = countDownSecond - pastSeconds
        setRemainSeconds(remain >= 0 ? remain : 0)
      }, 1)
    } else {
      clearInterval(countDownTimer)
    }
    return () => clearInterval(countDownTimer)
  }, [timerState])

  const toggleTimer = () => {
    setTimerState(!timerState)
  }

  return (
    <div className="clock d-flex align-items-center border-bot-light">
      <button className="clock-button btn-lg" onClick={toggleTimer}></button>
      <h2 className="clock-display text-light">
        {new Date(remainSeconds * 1000).toISOString().substr(14, 5)}
      </h2>
      <h2 className="title text-light">The First Thing To Do Today</h2>
    </div>
  )
}

CountDownTimer.propTypes = {
  onTimeUp: PropTypes.func,
  seconds: PropTypes.number,
}

export default CountDownTimer
