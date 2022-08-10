import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveArtComponent } from './remove-art.component';

describe('RemoveArtComponent', () => {
  let component: RemoveArtComponent;
  let fixture: ComponentFixture<RemoveArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
