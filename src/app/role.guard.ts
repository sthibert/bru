import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ArticleService} from './article.service';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {

    constructor(private router: Router, private articleService: ArticleService, private authService: AuthService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const id = next.paramMap.get('id');

        return this.articleService.get(id)
            .pipe(
                map(article => {
                    if (article.author !== this.authService.getLoggedInUser().username) {
                        this.router.navigate(['/articles']);
                        alert('You\'re not allowed to access the article "' + article.title + '".');
                        return false;
                    }
                    return true;
                })
            );
    }

}
