/* eslint-disable react/prop-types */
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomeScreen from './screens/HomeScreen'
import TodoListScreen from './screens/TodoListScreen'
import AnalyticsScreen from './screens/AnalyticsScreen'
import MusicScreen from './screens/MusicScreen'

const Routes = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        classNames={'animation-forward'}
        timeout={500}
        key={location.pathname}
      >
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/todo" component={TodoListScreen} />
          <Route exact path="/analytics" component={AnalyticsScreen} />
          <Route exact path="/music" component={MusicScreen} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
})

export default Routes
