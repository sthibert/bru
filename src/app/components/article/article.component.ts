import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    @Input() article;

    constructor() {
    }

    ngOnInit() {
    }

    getArticleImage() {
        if (this.article.image) {
            return this.article.image;
        }
        return 'https://via.placeholder.com/500?text=No+image+provided.';
    }

}
