import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router, private authService: AuthService) {
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    getLoggedInUser() {
        return this.authService.getLoggedInUser();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/home']);
    }

}
