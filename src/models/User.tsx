export default class User {

    public id: number;
    public nickname: string;
    public firstName: string;
    public lastName: string;
    public password: string;
    public email: string;
    public token: string;

    constructor() {
        this.id = 0;
        this.nickname = "";
        this.firstName = "";
        this.lastName = "";
        this.password = "";
        this.email = "";
        this.token = "";
    }

}