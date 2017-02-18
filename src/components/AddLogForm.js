import React from 'react'
import { Field, reduxForm } from 'redux-form'
// button does not need to be from redux-form to work with form
import RaisedButton from 'material-ui/RaisedButton'
// make sure to use the TextField from the redux material-ui
import { TextField } from 'redux-form-material-ui'

const AddLogForm = (props) => {
  const { onChange, handleSubmit, valid, returnPath, dirty } = props

  // validation functions
  const required = value => value == null ? 'Required' : undefined

  const style_floatingLabelShrink = {
    // color: colors.blue
  }

  const style_underlineFocus = {
    // borderColor: colors.blue
  }

  const style_buttonContainer = {
    float: 'right',
    marginTop: '20px'
  }

  const style_button = {
    paddingTop: '15px',
    paddingRight: '20px',
    paddingBottom: '15px',
    paddingLeft: '20px',
    // HACK: overrides set height from material-ui
    height: ''
  }

  return (
    <form onChange={ onChange.bind(this, dirty) } onSubmit={ handleSubmit } style={{minWidth: '100%'}}>
      <div>
        <Field
          name='price'
          component={ TextField }
          floatingLabelText='$ / gal'
          floatingLabelShrinkStyle={ style_floatingLabelShrink }
          underlineFocusStyle={ style_underlineFocus }
          fullWidth={ true }
          validate={[ required ]}
        />
      </div>
      <div>
        <Field
          name='miles'
          component={ TextField }
          floatingLabelText='miles'
          floatingLabelShrinkStyle={ style_floatingLabelShrink }
          underlineFocusStyle={ style_underlineFocus }
          fullWidth={ true }
          validate={[ required ]}
        />
      </div>
      <div>
        <Field
          name='gallons'
          component={ TextField }
          floatingLabelText='gallons'
          floatingLabelShrinkStyle={ style_floatingLabelShrink }
          underlineFocusStyle={ style_underlineFocus }
          fullWidth={ true }
          validate={[ required ]}
        />
      </div>
      <div style={ style_buttonContainer }>
        <RaisedButton
          label='Submit'
          type='submit'
          disabled={ !valid }
          secondary={ true }
          buttonStyle={ style_button}
          />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'addLogForm'
})(AddLogForm)
