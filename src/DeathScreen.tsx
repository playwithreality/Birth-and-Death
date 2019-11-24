import React from 'react'
import { styles } from './styles'
import { Text, View, TouchableOpacity, Modal, TextInput } from 'react-native'
import { Moment } from 'Moment'
import CalendarPicker from 'react-native-calendar-picker'

interface ErrorViews {
    error: string
    gotError: boolean
}

interface DeathInfo {
    firstname: string
    lastname: string
    born: Moment
    died: Moment
    village: string
    region: string
}

interface BorderHighlight {
    borderHighlight1: {
        borderWidth: number
        borderColor: string
    },
    borderHighlight2: {
        borderWidth: number
        borderColor: string
    },
    borderHighlight3: {
        borderWidth: number
        borderColor: string
    },
    borderHighlight4: {
        borderWidth: number
        borderColor: string
    },
}

interface DeathView extends DeathInfo, BorderHighlight, ErrorViews {
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
            borderHighlight1: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            borderHighlight2: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            borderHighlight3: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            borderHighlight4: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            error: '',
            gotError: false
        }
    }

    private changeFirstname = (text: string) => {
        this.setState({firstname: text})
    }
    private changeLastname = (text: string) => {
        this.setState({lastname: text})
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

    private onFocus1 = () => {
        this.setState({ 
            borderHighlight1: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur1 = () => {
        this.setState({
            borderHighlight1: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }
    private onFocus2 = () => {
        this.setState({ 
            borderHighlight2: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur2 = () => {
        this.setState({
            borderHighlight2: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }

    private onFocus3 = () => {
        this.setState({ 
            borderHighlight3: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur3 = () => {
        this.setState({
            borderHighlight3: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }

    private onFocus4 = () => {
        this.setState({ 
            borderHighlight4: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur4 = () => {
        this.setState({
            borderHighlight4: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }

    private gotError(errorMessage: string) {
        this.setState({error: errorMessage, gotError: true})
    }

    private cleanError() {
        this.setState({error: '', gotError: false})
    }

    private onSend = () => {
        if(this.state.firstname.length < 3) {
            this.gotError('Firstname too short')
            return false
        } else if(this.state.lastname.length < 3) {
            this.gotError('Lastname too short')
            return false
        }
        else if (this.state.died === undefined) {
            this.gotError('No death date selected')
            return false
        }  else if(this.state.born === undefined) {
            this.gotError('No birthday selected')
            return false
        } else if(this.state.village.length < 3) {
            this.gotError('Village name too short')
            return false
        } else if(this.state.region.length < 3) {
            this.gotError('Region name too short')
            return false
        } else {
            this.cleanError()
            return true
        }
    }

    render() {
      const { navigate } = this.props.navigation
      return(
        <View style={styles.container}>
           <View>
              <Text style={styles.textStyle}>Announce Death</Text>
            </View>
            {this.state.gotError ? 
                    <View>
                        <Text style={styles.alertText}>
                            {this.state.error}
                        </Text>
                    </View> : 
                    <></> 
                }
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

                <View style={styles.boxBackground1}>                        
                    <Text style={styles.subHeader}>Name of perished</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Firtname</Text>
                        </View>
                        <View style={[styles.inputFieldWrapper, this.state.borderHighlight1]}>
                            <TextInput 
                                style={styles.textInputField}
                                onFocus={this.onFocus1} 
                                onBlur={this.onBlur1}
                                onChangeText={this.changeFirstname} 
                                value={this.state.firstname}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                    <View style={styles.inputFieldWrapper}>
                        <Text>Lastname</Text>
                    </View>
                    <View style={[styles.inputFieldWrapper, this.state.borderHighlight2]}>
                        <TextInput 
                            style={styles.textInputField}
                            onFocus={this.onFocus2} 
                            onBlur={this.onBlur2} 
                            onChangeText={this.changeLastname} 
                            value={this.state.lastname}
                        />
                    </View>
                </View>
                </View>

                <View style={styles.boxBackground2}>
                    <Text style={styles.subHeader}>Day of Death and Birth</Text>
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

                <View style={styles.boxBackground1}>
                    <Text style={styles.subHeader}>Place of death</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Village</Text>
                        </View>
                        <View style={[styles.inputFieldWrapper, this.state.borderHighlight3]}>
                            <TextInput 
                                style={styles.textInputField}
                                onFocus={this.onFocus3} 
                                onBlur={this.onBlur3} 
                                onChangeText={this.changeVillage} 
                                value={this.state.village}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Region</Text>
                        </View>
                        <View style={[styles.inputFieldWrapper, this.state.borderHighlight4]}>
                            <TextInput 
                                style={styles.textInputField}
                                onFocus={this.onFocus4} 
                                onBlur={this.onBlur4} 
                                onChangeText={this.changeRegion} 
                                value={this.state.region}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.touchContainer}>
                    <TouchableOpacity  
                        onPress={() => {
                            if(this.onSend()) {
                                navigate('announceDeath')}}
                            }
                    >
                        <View style={styles.buttonView}>
                            <Text style={styles.touchText}>Send announcement</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
      )
    }
  }
  