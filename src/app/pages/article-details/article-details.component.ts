import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../article.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

    loading = true;
    article: Article;

    constructor(private articlesService: ArticleService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route
            .paramMap
            .pipe(
                map(params => params.get('id'))
            )
            .subscribe(id => {
                this.loading = true;
                this.articlesService.getOne(id)
                    .then(article => {
                        this.loading = false;
                        this.article = article;
                    });
            });
    }

}
