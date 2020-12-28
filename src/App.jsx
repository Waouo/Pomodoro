import ReactDom from 'react-dom'
import HomeScreen from './HomeScreen'

const App = () => {
  return (
    <>
      <HomeScreen />
    </>
  )
}

const root = document.getElementById('root')
ReactDom.render(<App />, root)
