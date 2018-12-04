import {Injectable} from '@angular/core';
import {User} from './models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private key = 'bru-user';

    constructor(private http: HttpClient) {
    }

    public login(username: string, password: string) {
        window.localStorage.setItem(this.key, JSON.stringify({username, password}));
        // return this.http.post(environment.api + '/login', {username, password}).toPromise();
    }

    public logout() {
        window.localStorage.removeItem(this.key);
    }

    public isLoggedIn(): boolean {
        const user = window.localStorage.getItem(this.key);
        return !!user;
    }

    public getLoggedInUser(): User {
        const user = window.localStorage.getItem(this.key);
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

}
