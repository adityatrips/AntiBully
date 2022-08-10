import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-art',
  templateUrl: './remove-art.component.html',
  styleUrls: ['./remove-art.component.scss'],
})
export class RemoveArtComponent implements OnInit {
  constructor(private api: ApiService) {}

  articles: any[] = [];

  refresh() {
    this.api.getArticles().subscribe((art: any) => {
      this.articles = art.articles;
    });
  }

  remove(id: String) {
    this.api.removeArticle(id).subscribe(() => {
      this.refresh();
    });
  }

  ngOnInit(): void {
    this.refresh();
  }
}
