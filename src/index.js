import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'

import './override.css'
// material-ui events
injectTapEventPlugin()

render(
  <App />,
  document.getElementById('root')
)
