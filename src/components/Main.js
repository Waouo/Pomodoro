import React, { useState } from 'react'

const Main = () => {
  const [time, setTime] = useState(2500)

  return (
    <main>
      <div id="main-clock">
        <button className="clock-button"></button>
        <h2 id="clock-display">{time}</h2>
        <h2 id="clock-title">The First Thing To Do Today</h2>
      </div>

      <div id="main-todo">
        
      </div>
    </main>
  )
}

export default Main
