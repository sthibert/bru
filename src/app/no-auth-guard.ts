import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/profile']);
            return false;
        }
        return true;
    }

}
