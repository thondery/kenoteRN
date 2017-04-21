import Promise from 'bluebird'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import AppContainer from './containers'
import _ from 'lodash'

global.Promise = Promise
global._ = _
const store = configureStore()

export default App = () => 
  <Provider store={store} >
    <AppContainer />
  </Provider>