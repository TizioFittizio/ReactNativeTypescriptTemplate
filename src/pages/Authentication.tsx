import React from "react";
import { Container, Text, View, Item, Input, Icon, Button, Spinner } from 'native-base';
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from 'react-native';

export interface AuthenticationState {
    email: string;
    password: string;
}

export interface AuthenticationProps {
    navigation?: NavigationScreenProp<AuthenticationState>;
    userProfile?: any;
    login?: (username: string, password: string) => void;
    isAuthenticating: boolean;
}

export class Authentication extends React.Component<AuthenticationProps, AuthenticationState> {

    constructor(props: AuthenticationProps){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    componentWillUpdate(nextProps: AuthenticationProps, nextState: AuthenticationState){
        console.warn('Pffff', nextProps);
    }

    login(){
        /* this.setState({
            isAuthenticating: true
        }); */
        console.warn('Uhm');
        this.props.login!('asd', 'asd');
    }

    renderLoginButton(){
        if (!this.props.isAuthenticating){
            return (
                <Button
                    onPress={() => this.login()}
                    block
                    style={styles.loginButton}
                >
                    <Text>Login</Text>
                </Button>
            );
        }
        else {
            return (
                <Spinner color="blue" size="large" />
            );
        }
    }

    render(){
        return (
            <Container style={styles.container}>
                <View style={styles.logo} />
                <Item style={styles.input}>
                    <Icon type="Ionicons" name="mail" />
                    <Input
                        disabled={this.props.isAuthenticating}
                        keyboardType="email-address"
                        placeholder="Email"
                        returnKeyType="next"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />
                </Item>
                <Item style={styles.input}>
                    <Icon type="Ionicons" name="key" />
                    <Input
                        disabled={this.props.isAuthenticating}
                        placeholder="Password"
                        secureTextEntry
                        returnKeyType="done"
                        autoCorrect={false}
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />
                </Item>
                {this.renderLoginButton()}
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