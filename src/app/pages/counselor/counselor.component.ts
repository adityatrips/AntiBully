import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.scss'],
})
export class CounselorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email);
  }
}
