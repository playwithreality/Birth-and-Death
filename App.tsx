import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { BirthScreen } from './src/BirthScreen'
import { DeathScreen } from './src/DeathScreen'
import { styles } from './src/styles'
import { AnnounceBirth, AnnounceDeath } from './src/Announcement'

class HomeScreen extends React.Component<any> {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
          <View>
            <Text style={styles.textStyle}>BIRTH AND DEATH ANNOUNCEMENT</Text>
          </View>

          <View>
            <View style={styles.touchContainer}>
              <TouchableOpacity onPress={() => navigate('Birth')}>
                <View style={styles.buttonView}>
                  <Text style={styles.touchText}>Birth announcement</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.touchContainer}>
              <TouchableOpacity onPress={() => navigate('Death')}>
                <View style={styles.buttonView}>
                  <Text style={styles.touchText}>Death announcement</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </View>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Birth: {
    screen: BirthScreen
  },
  Death: {
    screen: DeathScreen
  },
  announceBirth: {
    screen: AnnounceBirth
  },
  announceDeath: {
    screen: AnnounceDeath
  }
})

export default createAppContainer(AppNavigator)
