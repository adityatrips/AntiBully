import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  constructor(private api: ApiService) {}

  reports: any = [];

  refresh() {
    this.api.getReports().subscribe((reports: any) => {
      this.reports = reports;
      console.log(this.reports);
    });
  }

  removeRep(id: string) {
    this.api.removeReports(id).subscribe(() => {
      this.refresh();
    });
  }

  ngOnInit(): void {
    this.refresh();
  }
}
