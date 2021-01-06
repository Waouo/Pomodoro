/* eslint-disable react/prop-types */
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomeScreen from './screens/HomeScreen'
import TodoListScreen from './screens/TodoListScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import MusicScreen from './screens/MusicScreen'
import { useEffect } from 'react'

const Routes = withRouter(({ location }) => {
  useEffect(() => {
    console.log(location)
  })
  return (
    <>
      <TransitionGroup className={'router-wrapper'}>
        <CSSTransition
          timeout={500}
          classNames={'fade'}
          key={location.pathname}
        >
          <Switch location={location}>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/todo" component={TodoListScreen} />
            <Route exact path="/analytics" component={AnalyticsScreen} />
            <Route exact path="/music" component={MusicScreen} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
})

export default Routes
