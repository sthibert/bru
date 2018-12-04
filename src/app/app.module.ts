import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {AddPaddingDirective} from './add-padding.directive';
import {HighlightDirective} from './highlight.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        AddPaddingDirective,
        HighlightDirective,
        LoginFormComponent,
        ReactiveLoginFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
