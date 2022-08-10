import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-specific-article',
  templateUrl: './specific-article.component.html',
  styleUrls: ['./specific-article.component.scss'],
})
export class SpecificArticleComponent implements OnInit {
  id: any;
  paramsSub: any;
  article: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  replaceAll(string: any) {
    return string.replaceAll('\n', '\n');
  }

  ngOnInit(): void {
    const _this = this;
    this.paramsSub = this.activatedRoute.params.subscribe((data) => {
      this.api.getOneArticle(data['id']).subscribe((ar) => {
        console.log(ar);
        _this.article = ar;
      });
    });
  }
}
