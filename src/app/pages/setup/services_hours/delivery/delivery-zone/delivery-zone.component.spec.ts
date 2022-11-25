import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryZoneComponent } from './delivery-zone.component';

describe('DeliveryZoneComponent', () => {
  let component: DeliveryZoneComponent;
  let fixture: ComponentFixture<DeliveryZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
