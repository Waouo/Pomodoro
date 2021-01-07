import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'
import DoneList from '../components/DoneList'
import TitleBar from '../components/TitleBar'

// eslint-disable-next-line react/prop-types
const TodoListScreen = ({ location }) => {
  const [showTodo, setShowTodo] = useState(true)
  const [showDone, setShowDone] = useState(true)

  return (
    <>
      <main className="todo-screen">
        <div className="d-flex justify-content-sb align-items-center mg-b-3">
          <h2 className="title text-tomato">TO-DO LIST</h2>
          <NewTodo
            classTodoInput={'todo-input-todoList'}
            classIconAdd={'icon-add-dark'}
            width={'75%'}
          />
        </div>
        <section>
          <TitleBar
            title={'TO DO'}
            isCollapsedBtn={true}
            handleCollapse={() => setShowTodo(!showTodo)}
          />
          <CSSTransition
            in={showTodo}
            timeout={300}
            classNames="animation-collapse"
            unmountOnExit
          >
            <TodoList
              color={'#998477'}
              classIconRadio={'icon-radio-dark'}
              classIconPlay={'icon-play-dark'}
              location={location}
            />
          </CSSTransition>
        </section>
        <section>
          <TitleBar
            title={'DONE'}
            isCollapsedBtn={true}
            handleCollapse={() => setShowDone(!showDone)}
          />
          <CSSTransition
            in={showDone}
            timeout={300}
            classNames="animation-collapse"
            unmountOnExit
          >
            <DoneList color={'#998477'} classIconRadio={'icon-check-circle'} />
          </CSSTransition>
        </section>
      </main>
    </>
  )
}

export default TodoListScreen
