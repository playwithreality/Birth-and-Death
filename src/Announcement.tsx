import React from 'react'
import { styles } from './styles'
import {Text, TouchableOpacity, View, } from 'react-native'

export class AnnounceBirth extends React.Component<any> {

    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={styles.container}>
            
          </View>
      )
    }
  }

  export class AnnounceDeath extends React.Component<any> {

    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={styles.container}>
          </View>
      )
    }
  }