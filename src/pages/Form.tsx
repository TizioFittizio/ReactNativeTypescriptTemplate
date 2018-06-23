import React from "react";
import { Container, Header, Content, Item, Icon, Input, Label, Picker, Toast, CheckBox, DatePicker, Button, Text } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from 'react-native';
import { Gender } from "../constants/Gender";
import { PropertyChanged } from "../actions/formActions";

export interface FormState {

}

export interface FormProps {
    navigation?: NavigationScreenProp<FormState>;
    username: string;
    usernameError: boolean;
    password: string;
    passwordError: boolean;
    gender: Gender;
    notification: boolean;
    birthday: Date;
    birthdayError: boolean;
    submit?: () => void;
    change?: (propertychanged: PropertyChanged) => void;
}

export class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps){
        super(props);
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

    render(){
        const {username, usernameError, password, passwordError, gender, notification, birthday, birthdayError} = this.props;
        return (
            <Container>
                <Content>
                    <Item error={usernameError} inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Username</Label>
                        <Input
                            onChangeText={text => this.changeProperty('username', text)}
                            value={username}/>
                        {this.renderErrorIcon(usernameError)}
                    </Item>
                    <Item error={passwordError} inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Password</Label>
                        <Input
                            secureTextEntry
                            value={password}/>
                        {this.renderErrorIcon(passwordError)}
                    </Item>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Gender</Label>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            selectedValue={gender}
                            onValueChange={(value: string) => Toast.show({text: value + ' changed'})}>
                            <Picker.Item label="Male" value={Gender.MALE} />
                            <Picker.Item label="Fermale" value={Gender.FERMALE} />
                        </Picker>
                    </Item>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Notification</Label>
                        <CheckBox checked={notification} />
                    </Item>
                    <Item error={birthdayError} inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Birthday</Label>
                        <DatePicker
                            defaultDate={birthday}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"it"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={true}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                        />
                        {this.renderErrorIcon(birthdayError)}
                    </Item>
                    <Button block style={styles.buttonConfirmStyle}>
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
    }
});