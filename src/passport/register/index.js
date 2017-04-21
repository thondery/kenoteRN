import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Image,
  Platform
} from 'react-native'
import { Actions } from "react-native-router-flux"
import { Button, Form, LeftButton } from 'kenote-react-native-design'
import styles, { width, height } from './style'

export default class Register extends Component {
  static propTypes = {
    
  }

  static defaultProps = {
    
  }

  render () {
    const { match, location, history } = this.props
    let options = [
      {
        type: 'forminput',
        name: 'username',
        label: '用户名',
        labelIcon: 'user',
        labelColor: '#8cc3b2',
        placeholder: '邮箱地址',
        returnKeyType: 'next'
      },
      {
        type: 'forminput',
        name: 'password',
        label: '密  码',
        labelIcon: 'lock',
        labelColor: '#8cc3b2',
        placeholder: '密码',
        password: true,
        returnKeyType: 'default'
      }
    ]
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={[styles.logoViewStyle, { marginTop: Platform.OS === 'ios' ? 120 : 100 }]} />
        <Form options={options}
          ref={'formRegister'}
          buttonLabel={'创建账号'}
          inputViewStyle={styles.inputViewStyle}
          textInputStyle={styles.textInputStyle}
          formWidth={width - 10}
          buttonStyle={styles.buttonStyle}
          marginWidth={15}
          //disable={this.state.disable}
          buttonPress={this.buttonPressHandle.bind(this)} >
        </Form>
        <LeftButton 
          style={{ position: 'absolute', top: Platform.OS === 'ios' ? 20 : 0, left: 0 }}
          label={'返回'} 
          color={'#fff'}
          onPress={Actions.pop} />
      </View>
    )
  }

  buttonPressHandle (body) {
    const { username, password } = body
    alert(JSON.stringify(body))
  }
}