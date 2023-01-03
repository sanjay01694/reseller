import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosIntegrationComponent } from './pos-integration.component';

describe('PosIntegrationComponent', () => {
  let component: PosIntegrationComponent;
  let fixture: ComponentFixture<PosIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
