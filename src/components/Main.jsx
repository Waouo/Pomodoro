import CountDownTimer from './CountDownTimer'
import ContextStore from '../ContextStore'
import { useContext } from 'react'
import TodoList from './TodoList'

const Main = () => {
  const { timerState } = useContext(ContextStore)

  const background =
    timerState === 'work'
      ? 'transparent linear-gradient(180deg, #FF6F61 0%, #FF4040 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #0AB6A2 0%, #009987 100%) 0% 0% no-repeat padding-box'

  return (
    <main
      className="justify-content-center align-items-center"
      style={{ background }}
    >
      <CountDownTimer />
      <TodoList />
    </main>
  )
}

export default Main
