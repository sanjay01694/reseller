import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateOnlinePaymentComponent } from './activate-online-payment.component';

describe('ActivateOnlinePaymentComponent', () => {
  let component: ActivateOnlinePaymentComponent;
  let fixture: ComponentFixture<ActivateOnlinePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateOnlinePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateOnlinePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
