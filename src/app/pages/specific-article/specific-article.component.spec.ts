import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificArticleComponent } from './specific-article.component';

describe('SpecificArticleComponent', () => {
  let component: SpecificArticleComponent;
  let fixture: ComponentFixture<SpecificArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
