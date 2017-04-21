import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'
import Spinner from 'react-native-spinkit'
import { Button } from 'kenote-react-native-design'
import Modal from 'react-native-modal'
import IntroContainer from '../intro'
import Passport from '../passport'
import styles, { width, height } from './style'

class AppContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modalVisible: true,
      ignoreInitial: true
    }
  }

  componentDidMount () {
    this.props.actions.initialApp()
  }

  componentWillReceiveProps (nextProps) {
    const { initialPending, initialError, initialMessage } = nextProps
  }

  render () {
    const { isWelcome, initialPending, initialError, initialMessage, auth } = this.props
    const Dert = isWelcome ? (
      <IntroContainer
        onDoneBtnClick={this.props.actions.intoApp.bind(this)}
        onSkipBtnClick={this.props.actions.intoApp.bind(this)}
        skipBtnLabel={'Skip'}
        doneBtnLabel={'进入'} />
    ) : this.renderMainComponent()
    return initialPending || (initialError > 0 && initialError <= 1000 && !this.state.ignoreInitial) ? (
      <View style={styles.container}>
        {this.state.modalVisible ? (
          <Spinner
            type={'Pulse'} 
            color={'#eeeeee'} 
            size={64} />
        ) : (
          <Button 
            label={`点击屏幕重新连接`}
            onPress={ () => {
              this.setState({ modalVisible: true })
              this.props.actions.initialApp()
            }}
            style={styles.screenButton} />
        )}
        <Modal isVisible={initialError > 0 && this.state.modalVisible}>
          <View style={styles.modalView}>
            <Text style={styles.messageText}>{initialMessage}</Text>
            <Button 
              label={'关闭'}
              onPress={ () => this.setState({ modalVisible: false }) }
              style={styles.modalButton} >
            </Button>
          </View>
        </Modal>
      </View>
    ) : Dert
  }

  renderMainComponent () {
    const { auth } = this.props
    return auth ? (
      <View style={{flex:1}}>
        <Text>fdjjkf</Text>
      </View>
    ) : (
      <Passport usePage={'login'} />
    )
  }
}

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  }
}

const mapStateToProps = (state) => ({
  isWelcome           : state.Root.isWelcome,
  initialPending      : state.Root.initialPending,
  initialError        : state.Root.initialError,
  initialMessage      : state.Root.initialMessage,
  auth                : state.Root.useAuth
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)