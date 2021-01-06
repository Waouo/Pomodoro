import { useSelector } from 'react-redux'
import CountDownTimer from '../components/CountDownTimer'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'

// eslint-disable-next-line react/prop-types
const HomeScreen = ({ location }) => {
  const mode = useSelector((state) => state.mode)

  const background =
    mode === 'work'
      ? 'transparent linear-gradient(180deg, #FF6F61 0%, #FF4040 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #0AB6A2 0%, #009987 100%) 0% 0% no-repeat padding-box'

  return (
    <>
      <main style={{ background }}>
        {/** preload icon image **/}
        <div
          className="icon-pause"
          style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}
        ></div>
        {/** preload icon image **/}
        <section className="clock-section">
          <CountDownTimer />
        </section>
        <section className="todo-section d-flex justify-content-center">
          <NewTodo
            classTodoInput={'todo-input-home'}
            classIconAdd={'icon-add'}
            width={'100%'}
          />
          <TodoList
            color={'white'}
            classIconRadio={'icon-radio'}
            classIconPlay={'icon-play-sm'}
            location={location}
          />
        </section>
      </main>
    </>
  )
}

export default HomeScreen
