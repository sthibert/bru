import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HighlightDirective} from './highlight.directive';
import {UserComponent} from './components/user/user.component';
import {ReactiveLoginFormComponent} from './components/reactive-login-form/reactive-login-form.component';
import {ArticleComponent} from './components/article/article.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {LoginComponent} from './pages/login/login.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomeComponent} from './pages/home/home.component';
import {ArticlesComponent} from './pages/articles/articles.component';
import {ArticleDetailsComponent} from './pages/article-details/article-details.component';
import {AuthGuard} from './auth-guard';
import {NoAuthGuard} from './no-auth-guard';
import {RoleGuard} from './role.guard';
import {ArticleEditionComponent} from './pages/article-edition/article-edition.component';
import {OutInterceptor} from './out-interceptor';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent, canActivate: [NoAuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {
        path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard],
        children: [
            {path: ':id', component: ArticleDetailsComponent, canActivate: [RoleGuard]},
            {path: ':id/edit', component: ArticleEditionComponent, canActivate: [RoleGuard]}
        ]
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        HighlightDirective,
        ReactiveLoginFormComponent,
        ProfileComponent,
        LoginComponent,
        PageNotFoundComponent,
        HomeComponent,
        ArticleComponent,
        ArticlesComponent,
        ArticleDetailsComponent,
        ArticleEditionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        NoAuthGuard,
        RoleGuard,
        {provide: HTTP_INTERCEPTORS, useClass: OutInterceptor, multi: true}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
