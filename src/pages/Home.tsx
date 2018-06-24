import React from 'react';
import { Text, View, Container, Content, H1, List, ListItem, Left, Icon, Body, Toast } from 'native-base';
import { StyleSheet, Linking } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Constants from '../common/Costants';
import StorageService from '../services/StorageService';
import { EStorageKey } from '../common/Enums';
import User from '../models/User';

interface State {

}

interface Props {
    navigation: NavigationScreenProp<State>;
}

export class Home extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
    }

    onListItemAuthenticationPressed() {
        this.props.navigation.navigate('Authentication');
    }

    onListItemFormPressed(){
        this.props.navigation.navigate('Form');
    }

    async onListItemCardsPressed(){
        const userLogged = await StorageService.getInstance().getObject(EStorageKey.USER_AUTHENTICATED, new User());
        if (!userLogged){
            Toast.show({
                text: 'You should be logged!',
                position: 'bottom',
                type: 'warning'
            });
        }
        else {
            this.props.navigation.navigate('Cards');
        }
    }

    /**
     * Function executed on contribute item pressed
     * Attempt to open repository URL
     */
    async onListItemContributePressed(){
        try {
            const canOpenUrl = await Linking.canOpenURL(Constants.ContributeUrl);
            if (canOpenUrl) {
                Linking.openURL(Constants.ContributeUrl);
            }
            else {
                throw new Error('Can\'t open url');
            }
        }
        catch (e){
            Toast.show({
                text: (e + ''),
                type: 'danger'
            });
        }
    }

    render(){
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem icon onPress={() => this.onListItemAuthenticationPressed()}>
                            <Left>
                                <Icon type="Ionicons" name="key" />
                            </Left>
                            <Body>
                                <Text>Authentication</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => this.onListItemFormPressed()}>
                            <Left>
                                <Icon type="Ionicons" name="clipboard" />
                            </Left>
                            <Body>
                                <Text>Form</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={() => this.onListItemCardsPressed()}>
                            <Left>
                                <Icon type="Ionicons" name="thumbs-up" />
                            </Left>
                            <Body>
                                <Text>Cards Scroll</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="Ionicons" name="photos" />
                            </Left>
                            <Body>
                                <Text>Gallery</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="Ionicons" name="list" />
                            </Left>
                            <Body>
                                <Text>List</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="Ionicons" name="camera" />
                            </Left>
                            <Body>
                                <Text>Pick Image</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon onPress={this.onListItemContributePressed}>
                            <Left>
                                <Icon type="Ionicons" name="logo-octocat" />
                            </Left>
                            <Body>
                                <Text>Contribute</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}