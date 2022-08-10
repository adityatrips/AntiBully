import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPublishedArticlesComponent } from './read-published-articles.component';

describe('ReadPublishedArticlesComponent', () => {
  let component: ReadPublishedArticlesComponent;
  let fixture: ComponentFixture<ReadPublishedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPublishedArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPublishedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
