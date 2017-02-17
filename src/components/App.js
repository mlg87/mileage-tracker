import React, { Component } from 'react'
import { theme } from '../theme_config'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Nav from './Nav'

const style_container = {
  backgroundColor: theme.palette.canvasColor,
  height: '100vh'
}

export default class extends Component {
  render() {
    console.log('props', this.props);
    return (
      <MuiThemeProvider muiTheme={ theme }>
        <div style={ style_container }>
          <Nav />
        </div>
      </MuiThemeProvider>
    )
  }
}
