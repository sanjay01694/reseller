import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryIntegrationComponent } from './delivery-integration.component';

describe('DeliveryIntegrationComponent', () => {
  let component: DeliveryIntegrationComponent;
  let fixture: ComponentFixture<DeliveryIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
