import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleDeskComponent } from './principle-desk.component';

describe('PrincipleDeskComponent', () => {
  let component: PrincipleDeskComponent;
  let fixture: ComponentFixture<PrincipleDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
