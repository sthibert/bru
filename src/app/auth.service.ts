import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private static key = 'bru-user';

    constructor() {
    }

    public static login(email: string, password: string) {
        window.localStorage.setItem(this.key, JSON.stringify({email, password}));
    }

    public static getLoggedInUser() {
        const user = window.localStorage.getItem(this.key);
        if (user) {
            return JSON.parse(user);
        } else {
            return {
                email: '',
                password: ''
            };
        }
    }

}
