import React from 'react'
import ReactDOM from 'react-dom'

import './styles/base.scss'
import Auth from './containers/Auth/Auth'
import AuthTrianer from './containers/AuthTrainer/AuthTrainer'
import AuthStudent from './containers/AuthStudent/AuthStudent'

const App = () => {
  return (
    <div>
      <Auth/>
      <AuthStudent/>
      <AuthTrianer/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
