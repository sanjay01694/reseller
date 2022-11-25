import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBasicsComponent } from './restaurant-basics.component';

describe('RestaurantBasicsComponent', () => {
  let component: RestaurantBasicsComponent;
  let fixture: ComponentFixture<RestaurantBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
