import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
// create the store here so that we dont have to export from index.js
import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from '../reducers'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools'
// components
import App from '../components/App'
import UnderConstruction from '../components/UnderConstruction'
import NotFound from '../components/NotFound'

const middleware = routerMiddleware(browserHistory)
// export store for the Provider in index.js
export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, middleware),
  DevTools.instrument())
)

const history = syncHistoryWithStore(browserHistory, store)

export const AppRouter = (
  <Router history={ history }>
    <Route path='/' component={ App }>
      <IndexRoute component={ UnderConstruction } />
      <Route path='*' component={ NotFound } />
    </Route>
  </Router>
)
