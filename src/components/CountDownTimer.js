import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import preLoadImgPause from '../images/baseline-pause_circle_filled-24px.svg'

let countDownTimer

const CountDownTimer = () => {
  const [countDownSecond, setCountDownSecond] = useState(1500)
  const [isTimerRun, setIsTimerRun] = useState(false)

  useEffect(() => {
    // const preLoadImgPause = new Image()
    // preLoadImgPause.src = path.resolve(
    //   __dirname,
    //   'baseline-pause_circle_filled-24px.svg'
    // )
    console.log(preLoadImgPause)
  }, [])

  useEffect(() => {
    if (isTimerRun) {
      const startTime = Date.now()
      countDownTimer = setInterval(() => {
        const pastSeconds = (Date.now() - startTime) / 1000
        const remain = countDownSecond - pastSeconds
        setCountDownSecond(remain >= 0 ? remain : 0)
      }, 1)
    } else {
      clearInterval(countDownTimer)
    }
    return () => clearInterval(countDownTimer)
  }, [isTimerRun])

  const toggleTimer = () => {
    setIsTimerRun(!isTimerRun)
  }

  const icon = isTimerRun ? 'icon-pause' : 'icon-play'

  const style = {
    backgroundColor: 'white',
  }

  return (
    <>
      {/* <div
        className="icon-pause"
        style={{display: 'none'}}
      ></div> */}
      <div className="clock d-flex align-items-center border-bot-light">
        <button className={`${icon} btn-lg`} onClick={toggleTimer}></button>
        <h2 className="clock-display text-light">
          {new Date(countDownSecond * 1000).toISOString().substr(14, 5)}
        </h2>
        <h2 className="title text-light">The First Thing To Do Today</h2>
      </div>
      <div className="progress-bar" style={style}></div>
    </>
  )
}

CountDownTimer.propTypes = {
  onTimeUp: PropTypes.func,
  seconds: PropTypes.number,
}

export default CountDownTimer
