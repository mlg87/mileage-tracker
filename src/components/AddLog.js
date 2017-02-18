import React, { Component } from 'react'
import { connect } from 'react-redux'
// components
import Paper from 'material-ui/Paper'
import Add from 'material-ui/svg-icons/content/add'
import Clear from 'material-ui/svg-icons/content/clear'
import Divider from 'material-ui/Divider'
import AddLogForm from './AddLogForm'

class AddLog extends Component {
  state = {
    isDirty: false
  }

  handleSubmit (values, dispatch, props) {
    console.log('vals', values);
    console.log('dispatch', dispatch);
    console.log('props', props);
  }

  onChange (isDirty, e) {
    this.setState({isDirty: isDirty})
  }

  clearForm() {

  }

  render() {
    const style_container = {
      margin: '20px',
      padding: '10px'
    }

    return (
      <Paper style={ style_container }>
        <h1>
          <span style={{marginRight: '10px', cursor: 'pointer'}}>
            { this.state.isDirty ? <Clear onClick={ this.logThis } /> : <Add /> }
          </span>
         Add new log
        </h1>
        <Divider />
        <AddLogForm onSubmit={ this.handleSubmit.bind(this) } onChange={ this.onChange.bind(this) } />
      </Paper>
    )
  }
}

export default connect()(AddLog)
