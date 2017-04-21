import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#438c67',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logoViewStyle: {
    alignSelf: 'center', 
    marginTop: 100,
    marginBottom: 10, 
    width: width / 2, 
    height: width / 8
  },
  inputViewStyle: {
    backgroundColor: '#fff',
    //width
  },
  textInputStyle: {
    backgroundColor: 'transparent', 
    marginTop: 0, 
    marginBottom: 0, 
    borderBottomWidth: 1, 
    borderColor: '#eee', 
    marginLeft: 10
  },
  buttonStyle: {
    backgroundColor: '#2c6347', 
    //borderRadius: 5, 
    marginTop: 20
  },
  buttonDisabledStyle: {
    backgroundColor: '#4c7560'
  },
  textButtonStyle: {
    backgroundColor: 'transparent'
  }
})