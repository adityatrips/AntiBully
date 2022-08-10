import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articleArr: Article[] = [];
  title: string = '';
  brief: string = '';
  body: string = '';
  author: string = '';
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const _this = this;
    this.api.getArticles().subscribe((data) => {
      _this.articleArr = data;
    });
  }

  addReport() {
    this.api
      .addArticles({
        title: this.title,
        brief: this.brief,
        body: this.body,
        author: this.author,
      })
      .subscribe((val) => {
        console.log(val);
        this.title = '';
        this.brief = '';
        this.body = '';
        this.author = '';
        this.api.getArticles().subscribe((data) => {
          this.articleArr = data;
        });
      });
  }
}
