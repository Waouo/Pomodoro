import React, { useState } from 'react'

const Main = () => {
  const [time, setTime] = useState(2500)

  return (
    <main>
      <div className="clock d-flex align-items-center border-bot-light">
        <button className="clock-button"></button>
        <h2 className="clock-display text-light">{time}</h2>
        <h2 className="title text-light">The First Thing To Do Today</h2>
      </div>

      <div className="todo d-flex justify-content-center">
        <div className="new-todo d-flex justify-content-sb">
          <input
            type="text"
            placeholder="ADD A NEW MiSSION..."
            className="todo-input text-light"
          />
          <button className="add-todo-btn btn-md btn-transparent"></button>
        </div>
      </div>
    </main>
  )
}

export default Main
