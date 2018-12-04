import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

    @Input() user: User;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }

}
