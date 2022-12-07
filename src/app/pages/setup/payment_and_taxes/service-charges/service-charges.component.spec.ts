import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChargesComponent } from './service-charges.component';

describe('ServiceChargesComponent', () => {
  let component: ServiceChargesComponent;
  let fixture: ComponentFixture<ServiceChargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceChargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
