import React from 'react'
import { styles } from './styles'
import { Text, View, TouchableOpacity, Modal, TextInput } from 'react-native'
import { Moment } from 'Moment'
import CalendarPicker from 'react-native-calendar-picker'

interface DeathInfo {
    firstname: string
    lastname: string
    born: Moment
    died: Moment
    village: string
    region: string
}

interface DeathView extends DeathInfo {
    birthModalityVisible: boolean
    deathModalityVisible: boolean
}

export class DeathScreen extends React.Component<any, DeathView> {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            born: undefined,
            died: undefined,
            village: '',
            region: '',
            birthModalityVisible: false,
            deathModalityVisible: false,
        }
    }

    private changeFirstname = (text: string) => {
        this.setState({firstname: text})
    }
    private changeLastname = (text: string) => {
        this.setState({firstname: text})
    }

    private changeVillage = (text: string) => {
        this.setState({ village: text})
    }

    private changeRegion = (text: string) => {
        this.setState({ region: text})
    }

    private onBirthChange = (date: Moment) => {
        this.setState({born: date})
    }
    private onDeathChange = (date: Moment) => {
        this.setState({died: date})
    }

    private onBirthModalityVisible = () => {
        this.setState({birthModalityVisible: true})
    }

    private onDeathModalityVisible = () => {
        this.setState({deathModalityVisible: true})
    }

    private onBirthModalityHidden = () => {
            this.setState({birthModalityVisible: false})
    }

    private onDeathModalityHidden = () => {
        this.setState({deathModalityVisible: false})
}


    render() {
      const { navigate } = this.props.navigation
      return(
        <View style={styles.container}>
           <View>
              <Text style={styles.textStyle}>Announce Death</Text>
            </View>
            <Modal
                    transparent={false}
                    visible={this.state.deathModalityVisible}
                    onRequestClose={() => null}
                >
                    <CalendarPicker onDateChange={ this.onDeathChange } />
                    <View style={styles.touchContainer}>
                        <TouchableOpacity onPress={() => this.onDeathModalityHidden()}>
                            <View style={styles.buttonView}>
                            <Text style={styles.touchText}>Select day</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal
                    transparent={false}
                    visible={this.state.birthModalityVisible}
                    onRequestClose={() => null}
                >
                    <CalendarPicker onDateChange={ this.onBirthChange } />
                    <View style={styles.touchContainer}>
                        <TouchableOpacity onPress={() => this.onBirthModalityHidden()}>
                            <View style={styles.buttonView}>
                            <Text style={styles.touchText}>Select day</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <View>                        
                    <Text style={styles.subHeader}>Name of perished</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Firtname</Text>
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
                                onChangeText={this.changeFirstname} 
                                value={this.state.firstname}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputFieldWrapper}>
                        <Text>Lastname</Text>
                    </View>
                    <View style={styles.inputFieldWrapper}>
                        <TextInput 
                            style={styles.textInputField} 
                            onChangeText={this.changeLastname} 
                            value={this.state.lastname}
                        />
                    </View>
                </View>

                <View>
                    <Text style={styles.subHeader}>Place of death</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Village</Text>
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
                                onChangeText={this.changeVillage} 
                                value={this.state.village}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Region</Text>
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
                                onChangeText={this.changeRegion} 
                                value={this.state.region}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.touchContainer}>
                    <TouchableOpacity onPress={() => {
                        this.onDeathModalityVisible()
                        }}
                    >
                        <View style={styles.buttonView}>
                        <Text style={styles.touchText}>{this.state.died ? `Died on ${this.state.died.format('DD-MM-YYYY')}` : 'Day of death'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.touchContainer}>
                    <TouchableOpacity  
                        onPress={() => {
                            this.onBirthModalityVisible()
                        }}
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.touchText}>{this.state.born? `Born on ${this.state.born.format('DD-MM-YYYY')}` : "Day of birth"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
      )
    }
  }
  