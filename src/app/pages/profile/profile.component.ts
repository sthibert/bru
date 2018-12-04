import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AuthService} from '../../auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    user: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.user = this.authService.getLoggedInUser();
    }

}
