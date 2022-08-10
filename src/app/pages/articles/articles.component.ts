import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor(private api: ApiService) {}

  articles: any = [];
  info: any = [];

  refresh() {
    this.api.getAllArticles().subscribe((articles: any) => {
      this.articles = articles;
      console.log(articles);
      articles.articles.map((article: any) => {
        let id = article._id;
        // console.log(article);
        this.info.push({
          id: id,
          body: {
            stuff: article.body,
          },
          brief: {
            stuff: article.brief,
          },
          author: {
            stuff: article.author,
          },
          isModerated: {
            stuff: article.isModerated,
          },
        });
      });
      console.log(this.info);
    });
  }

  accept(id: String) {
    this.api.acceptArticle(id).subscribe(() => {
      this.info = [];
      this.refresh();
    });
  }

  deny(id: String) {
    this.api.removeArticle(id).subscribe(() => {
      this.info = [];
      this.refresh();
    });
  }

  ngOnInit(): void {
    this.refresh();
  }
}
