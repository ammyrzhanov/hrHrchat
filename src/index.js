import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './styles/base.scss'
import Auth from './containers/Auth/Auth'
import AuthTrianer from './containers/AuthTrainer/AuthTrainer'
import AuthStudent from './containers/AuthStudent/AuthStudent'

const App = () => {
  return (
    <div>
      <Router>
        <Route path = '/' exact component = {Auth}/>
        <Route path = '/auth' exact component = {Auth}/>
        <Route path = '/auth/trainer' component = {AuthTrianer}/>
        <Route path = '/auth/student' component = {AuthStudent}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
