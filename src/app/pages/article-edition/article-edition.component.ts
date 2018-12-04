import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../article.service';

@Component({
    selector: 'app-article-edition',
    templateUrl: './article-edition.component.html',
    styleUrls: ['./article-edition.component.css']
})
export class ArticleEditionComponent implements OnInit {

    id: string;
    reactiveEditionForm: FormGroup;

    constructor(private route: ActivatedRoute, private articlesService: ArticleService, private router: Router) {
        this.reactiveEditionForm = new FormGroup({
            title: new FormControl(''),
            description: new FormControl(''),
            image: new FormControl('')
        });
    }

    ngOnInit() {
        this.route
            .paramMap
            .pipe(
                map(params => params.get('id'))
            )
            .subscribe(id => {
                this.id = id;
                this.articlesService.getOne(id)
                    .then(article => {
                        this.reactiveEditionForm.setValue({
                            title: article.title,
                            description: article.description,
                            image: article.image
                        });
                    });
            });
    }

    editArticle() {
        const title = this.reactiveEditionForm.get('title');
        const description = this.reactiveEditionForm.get('description');
        const image = this.reactiveEditionForm.get('image');
        if (title.valid && description.valid && image.valid) {
            this.articlesService.edit(this.id, title.value, description.value, image.value)
                .then(() => this.router.navigate(['/articles', this.id]));
        }
    }

}
