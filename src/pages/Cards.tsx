import React from "react";
import { H1, Container, Content } from "native-base";
import CardComponent from './../components/CardComponent';
import { StyleSheet } from 'react-native';

export interface CardsState {

}

export interface CardsProps {
    a: string;
}

export class Cards extends React.Component<CardsProps, CardsState> {

    constructor(props: CardsProps){
        super(props);
    }

    render(){
        return (
            <Container>
                <Content style={styles.contentStyle}>
                    <CardComponent
                        title='Eheh'
                        image={require('../../assets/images/oranges.jpg')}
                        // tslint:disable-next-line:max-line-length
                        post='Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'
                        likes={5}
                        comments={10}/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    contentStyle: {
        padding: 5
    }
});