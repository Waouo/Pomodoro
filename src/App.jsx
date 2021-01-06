import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import TodoListScreen from './screens/TodoListScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import MusicScreen from './screens/MusicScreen'
import Sidenav from './components/Sidenav'

const App = () => {
  return (
    <Router>
      <Sidenav />
      <Route path="/" component={HomeScreen} exact/>
      <Route path="/todo" component={TodoListScreen} />
      <Route path="/analytics" component={AnalyticsScreen} />
      <Route path="/music" component={MusicScreen} />
    </Router>
  )
}

export default App
