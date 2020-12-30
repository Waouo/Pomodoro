import CountDownTimer from './CountDownTimer'
import ContextStore from '../ContextStore'
import { useContext } from 'react'

const Main = () => {
  const { timerState } = useContext(ContextStore)

  const background =
    timerState === 'work'
      ? 'transparent linear-gradient(180deg, #FF6F61 0%, #FF4040 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #0AB6A2 0%, #009987 100%) 0% 0% no-repeat padding-box'

  return (
    <main style={{ background }}>
      <CountDownTimer />

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