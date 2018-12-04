import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

    @Input() name = '';
    @Input() description = '';
    @Input() collapsed = false;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }

    toggle() {
        this.collapsed = !this.collapsed;
    }

}
