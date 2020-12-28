import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const body = document.querySelector('body')

const CountDownTimer = () => {
  const [timerState, setTimerState] = useState('work') // timerState: work | break
  const [isTimerRun, setIsTimerRun] = useState(false)
  const [countDownSecond, setCountDownSecond] = useState(10)

  let countDownTimer

  useEffect(() => {
    if (isTimerRun) {
      const startTime = Date.now()
      countDownTimer = setInterval(() => {
        const pastSeconds = (Date.now() - startTime) / 1000
        const remain = countDownSecond - pastSeconds
        setCountDownSecond(remain >= 0 ? remain : 0)
      }, 100)
    } else {
      clearInterval(countDownTimer)
    }

    if (countDownSecond <= 0) {
      setIsTimerRun(false)
      setCountDownSecond(10)
      setTimerState(timerState === 'work' ? 'work' : 'break')
    }

    if (timerState === 'break') {
      body.style.background = 'yellow'
    }

    return () => clearInterval(countDownTimer)
  }, [isTimerRun, countDownSecond])

  const toggleTimer = () => {
    setIsTimerRun(!isTimerRun)
  }

  const icon = isTimerRun ? 'icon-pause' : 'icon-play'

  const progressPercentage = (
    Math.round((countDownSecond / 1500) * 10000) / 100
  ).toString()

  const progressBarStyle = {
    width: progressPercentage + '%',
  }

  return (
    <>
      {/* preload icon image*/}
      <div
        className="icon-pause"
        style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
      ></div>
      <div className="clock d-flex align-items-center">
        <button className={`${icon} btn-lg`} onClick={toggleTimer}></button>
        <h2 className="clock-display text-light">
          {new Date(countDownSecond * 1000).toISOString().substr(14, 5)}
        </h2>
        <h2 className="title text-light">The First Thing To Do Today</h2>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={progressBarStyle} />
      </div>
    </>
  )
}

CountDownTimer.propTypes = {
  onTimeUp: PropTypes.func,
  seconds: PropTypes.number,
}

export default CountDownTimer
