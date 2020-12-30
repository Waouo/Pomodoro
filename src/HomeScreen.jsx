import ContextStore from './ContextStore'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import { useState } from 'react'

const HomeScreen = () => {
  const [timerState, setTimerState] = useState('work') // timerState: work | break

  return (
    <ContextStore.Provider value={{timerState, setTimerState}}>
      <Sidenav />
      <Main />
    </ContextStore.Provider>
  )
}

export default HomeScreen
