import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducer'

export default function configureStore (initialState) {
  const middleware = [thunk, __DEV__ && logger]
  const store = createStore(reducers, initialState, applyMiddleware(...middleware))
  return store
}