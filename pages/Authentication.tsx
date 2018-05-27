import React from "react";
import { Container, Text } from 'native-base';
import { NavigationScreenProp } from "react-navigation";

interface State {

}

interface Props {
    navigation: NavigationScreenProp<State>;
}

export class Authentication extends React.Component<Props, State> {

    render(){
        return (
            <Container>
                <Text>New Page</Text>
            </Container>
        );
    }
}