import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Report } from '../models/reports';
import { Volunteer } from '../models/Volunteer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.api}articles`);
  }

  getOneArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${environment.api}a/${id}`);
  }

  addArticles(article: Article) {
    return this.http.post(`${environment.api}add-article`, article);
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${environment.api}reports`);
  }

  getOneReport(id: string): Observable<Report> {
    return this.http.get<Report>(`${environment.api}r/${id}`);
  }

  addReport(report: Report) {
    return this.http.post(`${environment.api}report`, report);
  }

  getVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${environment.api}get-volunteers`);
  }

  addVolunteer(volunteer: Volunteer) {
    return this.http.post(`${environment.api}add-volunteer`, volunteer);
  }
}
