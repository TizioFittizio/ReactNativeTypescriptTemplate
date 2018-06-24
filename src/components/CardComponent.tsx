import React from "react";
import { Card, CardItem, Body, Text, Left, Button, Icon } from "native-base";
import { Image } from "react-native";
import { ImageSourcePropType } from "react-native";

interface State {

}

interface Props {
    title: string;
    image: ImageSourcePropType;
    post: string;
    likes: number;
    comments: number;
}

export default class CardComponent extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
    }

    render(){
        return (
            <Card>
                <CardItem bordered>
                    <Body>
                        <Text>{this.props.title}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        style={{flex: 1, height: 200}}
                        source={this.props.image}
                    />
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Text>
                            {this.props.post}
                        </Text>
                    </Body>
                </CardItem>
                <CardItem bordered>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                            <Icon name="logo-github" />
                            <Text>1,926 stars</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}