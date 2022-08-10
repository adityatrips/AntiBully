import { Component, OnInit } from '@angular/core';
import { Volunteer } from 'src/app/models/Volunteer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  addVol() {
    this.api
      .addVolunteer({
        name: this.name,
        email: this.email,
        phone: this.phone,
      })
      .subscribe((val) => {
        console.log(val);
        this.name = '';
        this.email = '';
        this.phone = '';
      });
  }
}
