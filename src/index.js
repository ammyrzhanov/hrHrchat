import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import './styles/base.scss'
import Auth from './containers/Auth/Auth'
import AuthTrianer from './containers/AuthTrainer/AuthTrainer'
import AuthStudent from './containers/AuthStudent/AuthStudent'
import reducers from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

const App = () => {
  return (
    <div>
      <Provider store = {store}>
        <Router>
          <Switch>
            <Route path = '/' exact component = {Auth}/>
            <Route path = '/auth' exact component = {Auth}/>
            <Route path = '/auth/trainer' component = {AuthTrianer}/>
            <Route path = '/auth/student' component = {AuthStudent}/>
            <Redirect to = '/'/>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
