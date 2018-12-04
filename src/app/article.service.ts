import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from './models/article';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    private api = environment.api + '/articles';

    constructor(private http: HttpClient) {
    }

    public getAll() {
        return this.http.get<Array<Article>>(this.api).toPromise();
    }

    public getOne(id) {
        return this.http.get<Article>(this.api + '/' + id).toPromise();
    }

    public get(id) {
        return this.http.get<Article>(this.api + '/' + id);
    }

    public edit(id, title, description, image) {
        const now = new Date();
        return this.http.patch(this.api + '/' + id, {
            title,
            description,
            image,
            date: now.toISOString()
        }).toPromise();
    }

}
