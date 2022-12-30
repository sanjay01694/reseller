import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOrderOptionsComponent } from './receive-order-options.component';

describe('ReceiveOrderOptionsComponent', () => {
  let component: ReceiveOrderOptionsComponent;
  let fixture: ComponentFixture<ReceiveOrderOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveOrderOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveOrderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
