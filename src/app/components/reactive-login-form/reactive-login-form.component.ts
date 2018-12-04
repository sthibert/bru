import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-reactive-login-form',
    templateUrl: './reactive-login-form.component.html',
    styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {

    reactiveLoginForm: FormGroup;

    constructor(private router: Router, private authService: AuthService) {
        this.reactiveLoginForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
        });
    }

    ngOnInit(): void {
        const user = this.authService.getLoggedInUser();
        if (user) {
            this.reactiveLoginForm.patchValue({username: user.username});
        }
    }

    reactiveLogin() {
        const username = this.reactiveLoginForm.get('username');
        const password = this.reactiveLoginForm.get('password');
        if (username.valid && password.valid) {
            this.authService.login(username.value, password.value);
            this.router.navigate(['/profile']);
        }
    }

}
