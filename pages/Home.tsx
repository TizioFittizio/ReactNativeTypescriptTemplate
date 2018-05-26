import React from "react";
import { Props } from './../components/StateComponent';
import { Text, View, Container, Content, H1, List, ListItem, Left, Icon, Body } from 'native-base';
import { StyleSheet } from 'react-native';

export class Home extends React.Component<{}, {}> {
    
    render(){
        return (
            <Container>
                <Content>
                    <H1 style={styles.title}>ReactNative + Typescript!</H1>
                    <List>
                        <ListItem icon style={styles.listItem}>
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
                        <ListItem icon>
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
        )
    }
}

const styles = StyleSheet.create({
    title: {
        margin: 10,
        textAlign: 'center'
    },
    listItem: {
        flex: 1
    }
})