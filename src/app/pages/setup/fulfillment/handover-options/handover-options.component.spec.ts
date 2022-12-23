import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverOptionsComponent } from './handover-options.component';

describe('HandoverOptionsComponent', () => {
  let component: HandoverOptionsComponent;
  let fixture: ComponentFixture<HandoverOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandoverOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoverOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
