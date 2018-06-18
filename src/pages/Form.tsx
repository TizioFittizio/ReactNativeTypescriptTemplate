import React from "react";
import { Container, Header, Content, Item, Icon, Input } from "native-base";
import { NavigationScreenProp } from "react-navigation";

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
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Icon Textbox'/>
                    </Item>
                </Content>
            </Container>
        );

    }
}