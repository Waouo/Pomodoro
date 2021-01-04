import NewTodo from '../components/NewTodo'
import Sidenav from '../components/Sidenav'
import TodoList from '../components/TodoList'

const TodoListScreen = () => {
  return (
    <>
      <Sidenav />
      <main className="todo-section ">
        <NewTodo
          classTodoInput={'todo-input-todoList'}
          classIconAdd={'icon-add-dark'}
        />
        <section>
          <TodoList color={'#998477'} style={{ background: 'orange' }} />
        </section>
      </main>
    </>
  )
}

export default TodoListScreen
