import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

import './index.css'
import App from './App'
import Navbar from './containers/Navbar/Navbar'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
)

reportWebVitals()
