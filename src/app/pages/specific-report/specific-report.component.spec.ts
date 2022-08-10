import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificReportComponent } from './specific-report.component';

describe('SpecificReportComponent', () => {
  let component: SpecificReportComponent;
  let fixture: ComponentFixture<SpecificReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
