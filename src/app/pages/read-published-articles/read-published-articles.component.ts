import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-published-articles',
  templateUrl: './read-published-articles.component.html',
  styleUrls: ['./read-published-articles.component.scss'],
})
export class ReadPublishedArticlesComponent implements OnInit {
  constructor(private api: ApiService) {}

  articles: any = {};

  ngOnInit(): void {
    this.api.getArticles().subscribe((article: any) => {
      this.articles = article.articles;
      console.log(article.articles);
    });
  }
}
