import React from 'react'
import { styles } from './styles'
import { Modal, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { Moment } from 'Moment'
import CalendarPicker from 'react-native-calendar-picker'

interface PersonalDetails {
    firstname: string,
    lastname: string,
    motherFirstname: string,
    motherLastname: string,
    fatherFirstname: string,
    fatherLastname: string,
    village: string,
    region: string,
    date: Moment,
}

interface BirthView extends PersonalDetails {
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
            modality: false
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
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
                                onChangeText={this.changeFirstname} 
                                value={this.state.firstname}
                            />
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
                </View>
                

                <View style={styles.boxBackground2}>
                    <Text style={styles.subHeader}>Mother</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Firstname</Text>
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
                                onChangeText={this.changeMotherFirstname} 
                                value={this.state.motherFirstname}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Lastname</Text>
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
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
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
                                onChangeText={this.changeFatherFirstname} 
                                value={this.state.fatherFirstname}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputFieldWrapper}>
                            <Text>Lastname</Text>
                        </View>
                        <View style={styles.inputFieldWrapper}>
                            <TextInput 
                                style={styles.textInputField} 
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