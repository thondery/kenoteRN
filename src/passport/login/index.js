import React, { Component, PropTypes } from 'react'
import {
  Text,
  View,
  Image,
  Platform
} from 'react-native'
import { Actions } from "react-native-router-flux"
import { Button, Form, RightButton } from 'kenote-react-native-design'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles, { width, height } from './style'

export default class Login extends Component {
  static propTypes = {
    
  }

  static defaultProps = {
    
  }

  constructor(props) {
     super(props);
     this.state = {
       pending: false
     }
   }

   componentDidMount() {
     
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
        placeholder: '用户名/邮箱',
        returnKeyType: 'next',
        isRequired: true
      },
      {
        type: 'forminput',
        name: 'password',
        label: '密  码',
        labelIcon: 'lock',
        labelColor: '#8cc3b2',
        placeholder: '密码',
        password: true,
        returnKeyType: 'default',
        isRequired: true
      }
    ]
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={[styles.logoViewStyle, { marginTop: Platform.OS === 'ios' ? 120 : 100 }]} />
        <Form 
          options={options}
          ref={'formlogin'}
          buttonLabel={'登 录'}
          inputViewStyle={styles.inputViewStyle}
          textInputStyle={styles.textInputStyle}
          formWidth={width - 10}
          buttonStyle={styles.buttonStyle}
          buttonDisabledStyle={styles.buttonDisabledStyle}
          marginWidth={15}
          pending={this.state.pending}
          buttonPress={this.buttonPressHandle.bind(this)} >
          <Button
            style={styles.textButtonStyle}
            label={'忘记密码?'}
            labelStyle={{ fontSize: 14 }}
            onPress={this.forgetHandle.bind(this)}
            />
        </Form>
        <RightButton 
          style={{ position: 'absolute', top: Platform.OS === 'ios' ? 20 : 0, right: 0 }}
          label={'创建账号'} 
          color={'#fff'}
          onPress={Actions.register} />
      </View>
    )
  }

  buttonPressHandle (body) {
    const { username, password } = body
    const { disabled } = this.refs['formlogin'].state
    if (disabled) return
    this.setState({ pending: true })
    setTimeout( () => {
      this.setState({ pending: false })
    }, 3000)
  }

  forgetHandle () {
    const body = this.refs['formlogin'].getBody()
    alert(JSON.stringify(body))
  }
  
}