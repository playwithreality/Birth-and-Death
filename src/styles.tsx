import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    touchText: {
      backgroundColor: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 15
    },
    buttonView: {
      borderColor: 'yellow',
      borderWidth: 7,
      width: 250
    },
    container: {
      alignItems: 'center',
      padding: 40,
      flex: 1,
      backgroundColor: 'gray'
    },
    inputContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15
    },
    inputFieldWrapper: {
        //flexWrap: 'wrap',
        //alignItems: 'flex-start',
        //flexDirection: 'row'
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
      paddingBottom: 20,
    },
    touchContainer: {
      alignItems: 'center',
      margin: 10,
    }
  })