import ReactDom from 'react-dom'
import MainScreen from './screens/MainScreen'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}

const root = document.getElementById('root')
ReactDom.render(<App />, root)
