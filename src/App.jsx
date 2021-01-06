import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import Sidenav from './components/Sidenav'

const App = () => {
  return (
    <>
      <Router>
        <Sidenav />
        <Routes />
      </Router>
    </>
  )
}

export default App
