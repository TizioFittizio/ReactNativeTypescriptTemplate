import React from 'react';
import { Text, View, Container, Content, H1, List, ListItem, Left, Icon, Body, Toast } from 'native-base';
import { StyleSheet, Linking } from 'react-native';
import { CONTRIBUTE_URL } from './../constants';
import { NavigationScreenProp } from 'react-navigation';

interface State {

}

interface Props {
    navigation: NavigationScreenProp<State>;
}

export class Home extends React.Component<Props, State> {

    constructor(props: Props){
        super(props);
        this.onListItemAuthenticationPressed = this.onListItemAuthenticationPressed.bind(this);
    }

    onListItemAuthenticationPressed() {
        this.props.navigation.navigate('Authentication');
    }

    /**
     * Function executed on contribute item pressed
     * Attempt to open repository URL
     */
    async onListItemContributePressed(){
        try {
            const canOpenUrl = await Linking.canOpenURL(CONTRIBUTE_URL);
            if (canOpenUrl) {
                Linking.openURL(CONTRIBUTE_URL);
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
                        <ListItem icon onPress={this.onListItemAuthenticationPressed}>
                            <Left>
                                <Icon type="Ionicons" name="key" />
                            </Left>
                            <Body>
                                <Text>Authentication</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon type="Ionicons" name="clipboard" />
                            </Left>
                            <Body>
                                <Text>Form</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
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