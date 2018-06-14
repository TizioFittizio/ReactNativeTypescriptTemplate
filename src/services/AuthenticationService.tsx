import axios from "axios";
import { LOGIN_URL } from "../constants";
import ServiceReponse from './../models/ServiceResponse';
import User from "../models/User";
import { testCredentials } from './../constants/testCredentials';

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

            // Real world implementation
            /* const response = await axios.post(LOGIN_URL, {
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
            } */

            // Fake credentials implementation
            await new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
            if (username === testCredentials.email && password === testCredentials.password) {
                const userReturned = new User();
                userReturned.firstName = "John";
                userReturned.lastName = "Doe";
                userReturned.nickname = "JohnDoeAdmin";
                userReturned.token = "12345";
                return new ServiceReponse<User>(userReturned);
            }
            else {
                return new ServiceReponse<User>(null, 'Authentication failed');
            }

        }
        catch (e){
            console.warn(e);
            return new ServiceReponse<User>(null, 'An error has occurred');
        }
    }
}