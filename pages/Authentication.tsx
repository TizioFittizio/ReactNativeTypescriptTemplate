import React from "react";
import { Container, Text, View, Item, Input, Icon, Button } from 'native-base';
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from 'react-native';

interface State {
    email: string;
    password: string;
    isAuthenticating: boolean;
    passwordReference?: any;
}

interface Props {
    navigation: NavigationScreenProp<State>;
}

export class Authentication extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.state = {
            email: "",
            password: "",
            isAuthenticating: false
        };
    }

    render(){
        return (
            <Container style={styles.container}>
                <View style={styles.logo} />
                <Item style={styles.input}>
                    <Icon type="Ionicons" name="mail" />
                    <Input
                        keyboardType="email-address"
                        placeholder="Email"
                        returnKeyType="next"
                        onChangeText={email => this.setState({...this.state, email})}
                    />
                </Item>
                <Item style={styles.input}>
                    <Icon type="Ionicons" name="key" />
                    <Input
                        placeholder="Password"
                        secureTextEntry
                        returnKeyType="done"
                        autoCorrect={false}
                        onChangeText={password => this.setState({...this.state, password})}
                    />
                </Item>
                <Button block style={styles.loginButton} >
                    <Text>Login</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    logo: {
        height: 100
    },
    input: {
        borderColor: 'black'
    },
    loginButton: {
        marginTop: 50
    }
});