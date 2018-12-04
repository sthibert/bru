import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../article.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

    loading = true;
    articles = [];

    constructor(private articlesService: ArticleService) {
    }

    ngOnInit() {
        this.articlesService.getAll()
            .then(articles => {
                this.loading = false;
                this.articles = articles;
            });
    }

}
