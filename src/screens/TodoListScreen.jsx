import { useState } from 'react'
import NewTodo from '../components/NewTodo'
import Sidenav from '../components/Sidenav'
import TodoList from '../components/TodoList'
import DoneList from '../components/DoneList'
import TitleBar from '../components/TitleBar'

const TodoListScreen = () => {
  const [isTodoNotCollapsed, setIsTodoCollapsed] = useState(true)
  const [isDoneNotCollapsed, setIsDoneCollapsed] = useState(true)

  return (
    <>
      <Sidenav />
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
            handleCollapse={() => setIsTodoCollapsed(!isTodoNotCollapsed)}
          />
          {isTodoNotCollapsed && (
            <TodoList
              color={'#998477'}
              classIconRadio={'icon-radio-dark'}
              classIconPlay={'icon-play-dark'}
            />
          )}
        </section>
        <section>
          <TitleBar
            title={'DONE'}
            isCollapsedBtn={true}
            handleCollapse={() => setIsDoneCollapsed(!isDoneNotCollapsed)}
          />
          {isDoneNotCollapsed && (
            <DoneList color={'#998477'} classIconRadio={'icon-check-circle'} />
          )}
        </section>
      </main>
    </>
  )
}

export default TodoListScreen
