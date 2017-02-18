import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

const style_container = {
  margin: '20px',
  padding: '10px'
}

export default () => {
  return (
    <Paper style={ style_container }>
      <h1>Add new log</h1>
      <Divider />
      <p>Price per gallon</p>
      <p>Miles</p>
      <p>Gallons</p>
    </Paper>
  )
}
