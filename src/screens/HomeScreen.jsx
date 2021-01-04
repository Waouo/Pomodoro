import { useSelector } from 'react-redux'
import CountDownTimer from '../components/CountDownTimer'
import Sidenav from '../components/Sidenav'
import TodoList from '../components/TodoList'

const Main = () => {
  const mode = useSelector((state) => state.mode)

  const background =
    mode === 'work'
      ? 'transparent linear-gradient(180deg, #FF6F61 0%, #FF4040 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #0AB6A2 0%, #009987 100%) 0% 0% no-repeat padding-box'

  return (
    <>
      <Sidenav />
      <main
        className="justify-content-center align-items-center"
        style={{ background }}
      >
        <CountDownTimer />
        <TodoList />
      </main>
    </>
  )
}

export default Main
