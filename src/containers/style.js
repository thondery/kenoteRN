import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    backgroundColor: '#438c67', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  screenButton: {
    backgroundColor: 'transparent', 
    width, 
    height
  },
  modalView: {
    backgroundColor: '#ccc', 
    width: width - 50, 
    alignSelf: 'center',
    alignItems: 'stretch', 
    justifyContent: 'center',
    borderRadius: 5,
    padding: 20
  },
  messageText: {
    fontSize: 20, 
    fontWeight: '500',
    color: '#666',
    textAlign: 'center'
  },
  modalButton: {
    marginTop: 20,
    borderRadius: 4
  }
})