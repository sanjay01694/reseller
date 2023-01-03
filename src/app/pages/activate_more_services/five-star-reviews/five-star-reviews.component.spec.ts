import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveStarReviewsComponent } from './five-star-reviews.component';

describe('FiveStarReviewsComponent', () => {
  let component: FiveStarReviewsComponent;
  let fixture: ComponentFixture<FiveStarReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveStarReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveStarReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
