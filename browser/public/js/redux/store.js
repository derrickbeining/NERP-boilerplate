import {createStore, applyMiddleware} from 'redux'
import thunkHandler from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkHandler,
    createLogger()
  )
)
