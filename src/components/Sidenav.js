import React from 'react'

const Sidenav = () => {
  return (
    <nav id="sidenav">
      <h1 className="sidenav-title">POMODORO</h1>
      <button className="sidenav-btn" id="sidenav-schedule"></button>
      <button className="sidenav-btn" id="sidenav-list"></button>
      <button className="sidenav-btn" id="sidenav-assessment"></button>
      <button className="sidenav-btn" id="sidenav-music"></button>
    </nav>
  )
}

export default Sidenav
