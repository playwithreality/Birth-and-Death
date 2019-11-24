import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    touchText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 15,
      alignSelf: 'center'
    },
    boxBackground1: {
        backgroundColor: '#f2f2f2',
        paddingLeft: 15,
        paddingTop: 10,
        width: '100%'
    },
    boxBackground2: {
        backgroundColor: '#ebe6e6',
        paddingLeft: 15,
        paddingTop: 10,
        width: '100%'
    },
    buttonView: {
      width: 250,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white'
    },
    inputContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15
    },
    inputFieldWrapper: {
        paddingRight: 10
    },
    textInputField: {
        backgroundColor: 'white',
        width: 200
    },
    subHeader: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    textStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 20
    },
    touchContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3b4245',
      margin: 10,
      borderRadius: 20
    }
  })