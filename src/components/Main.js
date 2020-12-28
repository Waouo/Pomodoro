import React from 'react'
import CountDownTimer from './CountDownTimer'

const Main = () => {

  return (
    <main>
      <CountDownTimer/>

      <div className="todo d-flex justify-content-center">
        <div className="new-todo d-flex justify-content-sb">
          <input
            type="text"
            placeholder="ADD A NEW MiSSION..."
            className="todo-input text-light bg-transparent"
          />
          <button className="icon-add btn-md bg-transparent"></button>
        </div>
      </div>
    </main>
  )
}

export default Main
