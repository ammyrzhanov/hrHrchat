import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line standard/object-curly-even-spacing
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './styles/base.scss'
import Auth from './containers/Auth/Auth'
import AuthTrianer from './containers/AuthTrainer/AuthTrainer'
import AuthStudent from './containers/AuthStudent/AuthStudent'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/' exact component = {Auth}/>
          <Route path = '/auth' exact component = {Auth}/>
          <Route path = '/auth/trainer' component = {AuthTrianer}/>
          <Route path = '/auth/student' component = {AuthStudent}/>
          <Redirect to = '/'/>
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
