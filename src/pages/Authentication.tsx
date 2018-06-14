import React from "react";
import { Container, Text, View, Item, Input, Icon, Button, Spinner, Content, H1, H2, H3 } from 'native-base';
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet } from 'react-native';
import MenuService from './../services/MenuService';
import { Alert } from "react-native";
import User from './../models/User';

export interface AuthenticationState {
    email: string;
    password: string;
}

export interface AuthenticationProps {
    navigation?: NavigationScreenProp<AuthenticationState>;
    userProfile?: User;
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
        MenuService.getInstance().setMenuItems([
            {
                text: 'Show test credentials',
                callback: this.showTestCredentials,
                icon: "key",
                iconColor: "#d89817"
            }
        ]);
    }

    showTestCredentials(){
        Alert.alert('Credentials', 'Email: john@doe.com\nPassword: admin');
    }

    attemptLogin(){
        this.props.login!(this.state.email, this.state.password);
    }

    renderLoginButton(){
        if (!this.props.isAuthenticating){
            return (
                <Button
                    onPress={() => this.attemptLogin()}
                    block
                    style={styles.loginButton}
                >
                    <Text>Login</Text>
                </Button>
            );
        }
        else {
            return (
                <Spinner color="blue" size={64} />
            );
        }
    }

    renderAuthenticationForm(){
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
                        autoCapitalize="none"
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
                        autoCapitalize="none"
                    />
                </Item>
                {this.renderLoginButton()}
            </Container>
        );
    }

    renderProfile(){
        const { firstName, lastName } = this.props.userProfile!;
        return (
            <Container style={styles.container}>
                <Content>
                    <H1>You are logged as {firstName} {lastName} !</H1>
                    <H3> • You will stay logged even if you close the application</H3>
                    <H3> • You can logout from the top menu</H3>
                </Content>
            </Container>
        );
    }

    render(){
        if (!this.props.userProfile){
            return this.renderAuthenticationForm();
        }
        else {
            return this.renderProfile();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    logo: {
        height: 150
    },
    input: {
        borderColor: 'black'
    },
    loginButton: {
        marginTop: 50
    }
});