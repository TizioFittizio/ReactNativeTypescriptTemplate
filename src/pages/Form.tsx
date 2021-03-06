import React from "react";
import { Container, Header, Content, Item, Icon, Input, Label, Picker, Toast, CheckBox, DatePicker, Button, Text } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from 'react-native';
import { EGender } from "../common/Enums";
import { IPropertyChanged } from "../actions/formActions";
import { DatePickerAndroid } from "react-native";
import { TouchableOpacity } from "react-native";

export interface FormState {

}

export interface FormProps {
    navigation?: NavigationScreenProp<FormState>;
    username: string;
    usernameError: string;
    password: string;
    passwordError: string;
    gender: EGender;
    notification: boolean;
    birthday: Date;
    birthdayError: string;
    submit?: () => void;
    change?: (propertychanged: IPropertyChanged) => void;
    reset?: () => void;
    success: boolean;
}

export class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps){
        super(props);
    }

    componentWillMount(){
        this.props.reset!();
    }

    componentWillReceiveProps(nextProps: FormProps){
        if (nextProps.success){
            Toast.show({
                text: "Success",
                position: "center",
                type: "success"
            });
            this.props.navigation!.navigate('Home');
            setTimeout(() => this.props.reset!(), 200);
        }
    }

    changeProperty(property: string, value: any){
        this.props.change!({
            property,
            value
        });
    }

    renderErrorIcon(condition: boolean){
        if (condition){
            return <Icon name='alert' />;
        }
        else return null;
    }

    renderErrorDescription(condition: boolean, message: string){
        if (condition){
            return (
                <Text style={styles.errorDescriptionStyle}>{message}</Text>
            );
        }
        else return null;
    }

    onButtonSubmit(){
        this.props.submit!();
    }

    // Maybe this can be made in an util service
    // TODO iOS
    selectBirthday = async () => {
        try {
            const today = new Date();
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: today
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              this.changeProperty('birthday', new Date(year || today.getFullYear(), month || today.getMonth(), day || today.getDate()));
            }
        }
        catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }

    render(){
        const {username, usernameError, password, passwordError, gender, notification, birthday, birthdayError} = this.props;
        return (
            <Container>
                <Content>

                    <Item error={usernameError.length > 0} inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Username</Label>
                        <Input
                            onChangeText={value => this.changeProperty('username', value)}
                            value={username}/>
                        {this.renderErrorIcon(usernameError.length > 0)}
                    </Item>
                    {this.renderErrorDescription(usernameError.length > 0, usernameError)}

                    <Item error={passwordError.length > 0} inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Password</Label>
                        <Input
                            onChangeText={value => this.changeProperty('password', value)}
                            secureTextEntry
                            value={password}/>
                        {this.renderErrorIcon(passwordError.length > 0)}
                    </Item>
                    {this.renderErrorDescription(passwordError.length > 0, passwordError)}

                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Gender</Label>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your Gender"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            selectedValue={gender}
                            onValueChange={value => this.changeProperty('gender', value)}>
                            <Picker.Item label="Male" value={EGender.MALE} />
                            <Picker.Item label="Fermale" value={EGender.FERMALE} />
                        </Picker>
                    </Item>

                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Notification</Label>
                        <CheckBox
                            onPress={() => this.changeProperty('notification', !notification)}
                            checked={notification} />
                    </Item>

                    <Item error={birthdayError.length > 0} inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Birthday</Label>
                        <TouchableOpacity onPress={() => this.selectBirthday()}>
                            <Input
                                editable={false}
                                value={birthday.toLocaleDateString()}/>
                        </TouchableOpacity>
                        {this.renderErrorIcon(birthdayError.length > 0)}
                    </Item>
                    {this.renderErrorDescription(birthdayError.length > 0, birthdayError)}

                    <Button
                        block
                        style={styles.buttonConfirmStyle}
                        onPress={() => this.onButtonSubmit()}>
                        <Text>Confirm</Text>
                    </Button>
                </Content>
            </Container>
        );

    }
}

const styles = StyleSheet.create({
    itemStyle: {
        marginLeft: 20,
        height: 50
    },
    itemLabelStyle: {
        width: 120
    },
    buttonConfirmStyle: {
        margin: 20
    },
    errorDescriptionStyle: {
        marginLeft: 20,
        color: 'red'
    }
});