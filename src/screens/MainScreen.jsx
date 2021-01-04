import { useSelector } from 'react-redux'
import HomeScreen from './HomeScreen'
import TodoListScreen from './TodoListScreen'
import AnalyticsScreen from './AnalyticsScreen'
import MusicScreen from './MusicScreen'

const MainScreen = () => {
  const screen = useSelector((state) => state.screen)

  return (
    <>
      {screen === 'home' && <HomeScreen />}
      {screen === 'todoList' && <TodoListScreen />}
      {screen === 'analytics' && <AnalyticsScreen />}
      {screen === 'music' && <MusicScreen />}
    </>
  )
}

export default MainScreen
