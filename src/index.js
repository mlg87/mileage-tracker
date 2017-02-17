import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { store, AppRouter } from './lib/router'
import DevTools from './containers/DevTools'

import './override.css'
// material-ui events
injectTapEventPlugin()

render(
  <Provider store={ store }>
    <div>
      { AppRouter }
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('root')
)
