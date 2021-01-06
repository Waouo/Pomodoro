import { cloneElement } from 'react'
/* eslint-disable react/prop-types */
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomeScreen from './screens/HomeScreen'
import TodoListScreen from './screens/TodoListScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import MusicScreen from './screens/MusicScreen'

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
}

const Routes = withRouter(({ location, history }) => (
  <TransitionGroup
    childFactory={(child) =>
      cloneElement(child, { classNames: ANIMATION_MAP[history.action] })
    }
  >
    <CSSTransition timeout={500} key={location.pathname}>
      <Switch location={location}>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/todo" component={TodoListScreen} />
        <Route exact path="/analytics" component={AnalyticsScreen} />
        <Route exact path="/music" component={MusicScreen} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
))

export default Routes
