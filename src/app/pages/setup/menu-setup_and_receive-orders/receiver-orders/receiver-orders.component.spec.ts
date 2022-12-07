import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverOrdersComponent } from './receiver-orders.component';

describe('ReceiverOrdersComponent', () => {
  let component: ReceiverOrdersComponent;
  let fixture: ComponentFixture<ReceiverOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
