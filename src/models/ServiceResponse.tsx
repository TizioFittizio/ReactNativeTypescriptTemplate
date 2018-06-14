export default class ServiceReponse<T> {

    public response: T | null | undefined;
    public error: string | null | undefined;

    constructor(response?: T | null, error?: string | null) {
        this.response = response;
        this.error = error;
    }

}