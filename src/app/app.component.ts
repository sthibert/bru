import {Component} from '@angular/core';
import {User} from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    users = [
        new User('Simon', 'age: 26', true),
        new User('Jean', 'age: 47', false),
        new User('Julie', 'age: 22', false),
        new User('Nicole', 'age: 89', true)
    ];

}
