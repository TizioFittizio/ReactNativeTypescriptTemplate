
import User from './User';
import Comment from './Comment';

export default class Post {

    public author: User;
    public title: string;
    public imageURI: string;
    public text: string;
    public likes: number;
    public comments: Comment[];
    public id: number;

    constructor(){
        this.author = User.getDummyUser();
        this.title = '';
        this.imageURI = '';
        this.text = '';
        this.likes = 0;
        this.comments = [];
        this.id = 0;
    }

    public static getDummyPost(){
        const p = new Post();
        p.title = 'An exiting dummy post';
        p.author = User.getDummyUser();
        p.likes = Math.round(Math.random() * 17);
        const randomImage = Math.floor(Math.random() * 3);
        switch (randomImage){
            case 0:
                p.imageURI = require('../../assets/images/oranges.jpg');
                break;
            case 1:
                p.imageURI = require('../../assets/images/strawberries.jpg');
                break;
            default:
                p.imageURI = require('../../assets/images/blueberries.jpg');
        }
        p.text = 'Insert here an interesting fun curious and with deep meaning text';
        p.comments = [Comment.getDummyComment(), Comment.getDummyComment(), Comment.getDummyComment()];
        return p;
    }

}