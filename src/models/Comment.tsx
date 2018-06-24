import User from "./User";

export default class Comment {

    public author: User;
    public text: string;

    constructor(){
        this.author = User.getDummyUser();
        this.text = "";
    }

    public static getDummyComment(): Comment {
        const c = new Comment();
        c.text = "Blah blah blah blah whatever";
        return c;
    }
}