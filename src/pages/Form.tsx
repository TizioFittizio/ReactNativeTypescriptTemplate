import React from "react";
import { Container, Header, Content, Item, Icon, Input, Label, Picker, Toast, CheckBox, DatePicker, Button, Text } from "native-base";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from 'react-native';

export interface FormState {

}

export interface FormProps {
    navigation?: NavigationScreenProp<FormState>;
}

export class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps){
        super(props);
    }

    render(){
        return (
            <Container>
                <Content>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Username</Label>
                        <Input />
                    </Item>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Password</Label>
                        <Input secureTextEntry />
                    </Item>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Gender</Label>
                        <Picker
                            mode="dropdown"
                            iosHeader="Select your SIM"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            onValueChange={(value: string) => Toast.show({text: value + ' changed'})}
                        >
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Fermale" value="fermale" />
                        </Picker>
                    </Item>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Notification</Label>
                        <CheckBox checked={true} />
                    </Item>
                    <Item inlineLabel style={styles.itemStyle}>
                        <Label style={styles.itemLabelStyle}>Birthday</Label>
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"it"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                        />
                    </Item>
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
    }
});