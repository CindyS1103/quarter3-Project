import { createStore, combineReducers, applyMiddleware } from 'redux'
import blogReducer from './reducer/blogReducer'
import messagesReducer from './reducer/messagesReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let rootReducer = combineReducers({
  blogReducer,
  messagesReducer

})

export default () => createStore(rootReducer, applyMiddleware(thunk, logger))
