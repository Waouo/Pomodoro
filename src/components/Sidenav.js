import React from 'react'

const Sidenav = () => {
  return (
    <nav id="sidenav">
      <h1 className="title text-light rotate-left-90">POMODORO</h1>
      <button
        className="sidenav-btn btn-lg btn-transparent"
        id="btn-schedule"
      ></button>
      <button
        className="sidenav-btn btn-lg btn-transparent"
        id="btn-list"
      ></button>
      <button
        className="sidenav-btn btn-lg btn-transparent"
        id="btn-assessment"
      ></button>
      <button
        className="sidenav-btn btn-lg btn-transparent"
        id="btn-music"
      ></button>
    </nav>
  )
}

export default Sidenav
