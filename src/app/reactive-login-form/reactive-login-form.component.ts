import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-reactive-login-form',
    templateUrl: './reactive-login-form.component.html',
    styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {

    reactiveLoginForm: FormGroup;

    constructor() {
        this.reactiveLoginForm = new FormGroup({
            email: new FormControl(''),
            password: new FormControl(''),
        });
    }

    ngOnInit(): void {
        const user = AuthService.getLoggedInUser();
        this.reactiveLoginForm.patchValue({email: user.email});
    }

    reactiveLogin() {
        const email = this.reactiveLoginForm.get('email');
        const password = this.reactiveLoginForm.get('password');
        if (email.valid && password.valid) {
            AuthService.login(email.value, password.value);
        }
    }

}
