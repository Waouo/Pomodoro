import React from 'react'

const Sidenav = () => {
  return (
    <nav id="sidenav">
      <h1 className="title text-light rotate-left-90">POMODORO</h1>
      <button className=" sidenav-btn btn-schedule icon-schedule btn-lg bg-transparent"></button>
      <button className="sidenav-btn btn-list icon-list btn-lg bg-transparent"></button>
      <button className="sidenav-btn btn-assessment icon-assessment  btn-lg bg-transparent"></button>
      <button className="sidenav-btn btn-music icon-music btn-lg bg-transparent"></button>
    </nav>
  )
}

export default Sidenav
