import '../scss/index.scss'

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import {Provider} from 'react-redux'
import store from './redux/store'

import Home from './components/Home'
import NotFound from './components/ErrorHandling/NotFound'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('react-root')
)
