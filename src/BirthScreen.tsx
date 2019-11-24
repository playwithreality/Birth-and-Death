import React from 'react'
import { styles } from './styles'
import { Modal, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { Moment } from 'Moment'
import CalendarPicker from 'react-native-calendar-picker'

interface PersonalDetails {
    firstname: string
    lastname: string
    motherFirstname: string
    motherLastname: string
    fatherFirstname: string
    fatherLastname: string
    village: string
    region: string
    date: Moment
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
    borderHighlight5: {
        borderWidth: number
        borderColor: string
    },
    borderHighlight6: {
        borderWidth: number
        borderColor: string
    },
    borderHighlight7: {
        borderWidth: number
        borderColor: string
    },
    borderHighlight8: {
        borderWidth: number
        borderColor: string
    },
}

interface BirthView extends PersonalDetails, BorderHighlight {
    modality: boolean
}

export class BirthScreen extends React.Component<any, BirthView> {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            motherFirstname: '',
            motherLastname: '',
            fatherFirstname: '',
            fatherLastname: '',
            village: '',
            region: '',
            date: undefined,
            modality: false,
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
            borderHighlight5: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            borderHighlight6: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            borderHighlight7: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            },
            borderHighlight8: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
            
        }
    }

    private changeFirstname = (text: string) => {
        this.setState({firstname: text})
    }
    private changeLastname = (text: string) => {
        this.setState({firstname: text})
    }
    private changeMotherFirstname = (text: string) => {
        this.setState({motherFirstname: text})
    }
    changeMotherLastName = (text: string) => {
        this.setState({ motherLastname: text})
    }
    private changeFatherFirstname = (text: string) => {
        this.setState({ fatherFirstname: text})
    }
    private changeFatherLastname = (text: string) => {
        this.setState({ fatherLastname: text})
    }

    private changeVillage = (text: string) => {
        this.setState({ village: text})
    }

    private changeRegion = (text: string) => {
        this.setState({ region: text})
    }
    
    private onDateChange = (date: Moment) => {
        this.setState({date: date})
    }

    private modalityVisible = () => {
        this.setState({modality: true})
    }

    private modalityHidden = () => {
        this.setState({modality: false})
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

    private onFocus5 = () => {
        this.setState({ 
            borderHighlight5: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur5 = () => {
        this.setState({
            borderHighlight5: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }

    private onFocus6 = () => {
        this.setState({ 
            borderHighlight6: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur6 = () => {
        this.setState({
            borderHighlight6: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }

    private onFocus7 = () => {
        this.setState({ 
            borderHighlight7: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur7 = () => {
        this.setState({
            borderHighlight7: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }

    private onFocus8 = () => {
        this.setState({ 
            borderHighlight8: {
                borderWidth: 4,
                borderColor: '#1b8ab3'
            },
        })
    }

    private onBlur8 = () => {
        this.setState({
            borderHighlight8: {
                borderWidth: 0,
                borderColor: '#1b8ab3'
            }
        })
    }
    
    render() {

        const { navigate } = this.props.navigation

        return(
            <View style={styles.container}>

                <Modal
                    transparent={false}
                    visible={this.state.modality}
                    onRequestClose={() => null}
                >
                    <CalendarPicker onDateChange={this.onDateChange} />
                    <View style={styles.touchContainer}>
                        <TouchableOpacity onPress={() => this.modalityHidden()}>
                            <View style={styles.buttonView}>
                            <Text style={styles.touchText}>Select day</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <View>
                    <Text style={styles.textStyle}>New Birth</Text>
                </View>
                <View style={styles.touchContainer}>
                    <TouchableOpacity onPress={() => this.modalityVisible()}>
                        <View style={styles.buttonView}>
                        <Text style={styles.touchText}>
                                {!this.state.date ? 
                                    'Select birthday' : 
                                    this.state.date.format('DD-MM-YYYY')}
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxBackground1}>                        
                    <Text style={styles.subHeader}>Child</Text>
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
                    <Text style={styles.subHeader}>Mother</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Firstname</Text>
                        </View>
                        <View style={[styles.inputFieldWrapper, this.state.borderHighlight3]}>
                            <TextInput 
                                style={styles.textInputField}
                                onFocus={this.onFocus3}
                                onBlur={this.onBlur3} 
                                onChangeText={this.changeMotherFirstname} 
                                value={this.state.motherFirstname}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Lastname</Text>
                        </View>
                        <View style={
                            [styles.inputFieldWrapper, this.state.borderHighlight4]
                        }>
                            <TextInput 
                                style={styles.textInputField}
                                onFocus={this.onFocus4} 
                                onBlur={this.onBlur4} 
                                onChangeText={this.changeMotherLastName} 
                                value={this.state.motherLastname}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.boxBackground1}>
                    <Text style={styles.subHeader}>Father</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Firstname</Text>
                        </View>
                        <View style={[styles.inputFieldWrapper, this.state.borderHighlight5]}>
                            <TextInput 
                                style={styles.textInputField} 
                                onFocus={this.onFocus5} 
                                onBlur={this.onBlur5}
                                onChangeText={this.changeFatherFirstname} 
                                value={this.state.fatherFirstname}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Lastname</Text>
                        </View>
                        <View style={[styles.inputFieldWrapper, this.state.borderHighlight6]}>
                            <TextInput 
                                style={styles.textInputField}
                                onFocus={this.onFocus6} 
                                onBlur={this.onBlur6} 
                                onChangeText={this.changeFatherLastname} 
                                value={this.state.fatherLastname}
                            />
                        </View>
                    </View>
                </View>

            <View style={styles.boxBackground2}>
                <Text style={styles.subHeader}>Place of birth</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputFieldWrapper}>
                        <Text>Village</Text>
                    </View>
                    <View style={[styles.inputFieldWrapper, this.state.borderHighlight7]}>
                        <TextInput 
                            style={styles.textInputField} 
                            onFocus={this.onFocus7} 
                            onBlur={this.onBlur7}
                            onChangeText={this.changeVillage} 
                            value={this.state.village}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputFieldWrapper}>
                        <Text>Region</Text>
                    </View>
                    <View style={[styles.inputFieldWrapper, this.state.borderHighlight8]}>
                        <TextInput 
                            style={styles.textInputField}
                            onFocus={this.onFocus8} 
                            onBlur={this.onBlur8} 
                            onChangeText={this.changeRegion} 
                            value={this.state.region}
                        />
                    </View>
                </View>
            </View>

                <View style={styles.touchContainer}>
                    <TouchableOpacity onPress={() => navigate('SendView')}>
                        <View style={styles.buttonView}>
                        <Text style={styles.touchText}>Announce Birth</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
  }