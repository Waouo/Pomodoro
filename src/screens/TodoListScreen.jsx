import Sidenav from '../components/Sidenav'
import TodoList from '../components/TodoList'

const TodoListScreen = () => {
  return (
    <>
      <Sidenav />
      <main
        className="todo-section "
      >
        <div
          style={{
            width: '55%',
            height: '20px',
            background: 'orange',
            display: 'inline-block',
          }}
        ></div>
        <TodoList color={'#998477'} style={{background: 'orange'}}/>
      </main>
    </>
  )
}

export default TodoListScreen
