import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Animated
} from 'react-native'
import {Actions, Scene, Router} from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import Login from './login'
import Register from './register'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar />
    <Scene key="register" component={Register} hideNavBar />
  </Scene>
)

export default () => <Router scenes={scenes} />