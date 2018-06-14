import axios from "axios";
import { LOGIN_URL } from "../constants";
import ServiceReponse from './../models/ServiceResponse';
import User from "../models/User";

export default class AuthenticationService {

    private static instance: AuthenticationService;

    public static getInstance = (): AuthenticationService => {
        if (!AuthenticationService.instance){
            AuthenticationService.instance = new AuthenticationService();
        }
        return AuthenticationService.instance;
    }

    public login = async (username: string, password: string) => {
        try {
            const response = await axios.post(LOGIN_URL, {
                email: username,
                password
            }, {
                timeout: 5000
            });
            console.warn(response.data);
            switch (response.status){
                case 200:
                    const userReturned = new User();
                    userReturned.firstName = "Test";
                    userReturned.lastName = "Test";
                    userReturned.nickname = ".....";
                    userReturned.token = response.data.token;
                    return new ServiceReponse<User>(userReturned);
                case 401:
                    return new ServiceReponse<User>(null, 'Authentication failed');
                default:
                    return new ServiceReponse<User>(null, 'An error has occurred');
            }
        }
        catch (e){
            console.warn(e);
            return new ServiceReponse<User>(null, 'An error has occurred');
        }
    }
}