import React from "react";
import { H1, Container, Content, Spinner, Text } from "native-base";
import CardComponent from './../components/CardComponent';
import { StyleSheet } from 'react-native';
import Constants from "../common/Costants";
import Post from "../models/Post";
import { FlatList } from "react-native";

export interface CardsState {

}

export interface CardsProps {
    posts: Post[];
    loadMorePosts?: () => void;
    loading: boolean;
}

export class Cards extends React.Component<CardsProps, CardsState> {

    constructor(props: CardsProps){
        super(props);
    }

    componentWillMount(){
        this.props.loadMorePosts!();
    }

    renderLoading(){
        if (this.props.loading){
            return <Spinner color="blue" size={32} />;
        }
        else return null;
    }

    renderPosts(){
        const posts = this.props.posts.map(x => {
            return {...x, key: x.id + ''};
        });
        return (
            <FlatList
                data={posts}
                renderItem={({item}) => <Text>{item.title}</Text>}
            />
        );
    }

    render(){
        return (
            <Container>
                <Content style={styles.contentStyle}>
                    {/*<CardComponent
                        title='Eheh'
                        image={image}
                        // tslint:disable-next-line:max-line-length
                        likes={5}
                    comments={10}/>*/}
                    {this.renderPosts()}
                    {this.renderLoading()}
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