import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

export const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer
})
