import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/reports';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  reportArr: Report[] = [];

  informantName: string = '';
  informantContact: string = '';
  victimName: string = '';
  incidentDesc: string = '';
  stepsTaken: string = '';
  expectations: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    const _this = this;
    this.api.getReports().subscribe((data) => {
      _this.reportArr = data;
    });
  }

  addReport() {
    this.api
      .addReport({
        informantName: this.informantName,
        informantContact: this.informantContact,
        victimName: this.victimName,
        incidentDesc: this.incidentDesc,
        stepsTaken: this.stepsTaken,
        expectations: this.expectations,
      })
      .subscribe((val) => {
        console.log(val);
        this.informantName = '';
        this.informantContact = '';
        this.victimName = '';
        this.incidentDesc = '';
        this.stepsTaken = '';
        this.expectations = '';
        this.api.getReports().subscribe((data) => {
          this.reportArr = data;
        });
      });
  }
}
