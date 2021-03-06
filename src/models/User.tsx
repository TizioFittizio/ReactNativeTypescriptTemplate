import { IStorable } from "../services/StorageService";

export default class User implements IStorable {

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

    public static getDummyUser(){
        const u = new User();
        u.id = -1;
        u.nickname = "Dummy";
        return u;
    }

    convertToString(): string {
        return JSON.stringify(this);
    }

    convertFromString(object: string): any {
        const obj = JSON.parse(object);
        this.id = obj.id;
        this.nickname = obj.nickname;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.email = obj.email;
        this.token = obj.token;
    }

}