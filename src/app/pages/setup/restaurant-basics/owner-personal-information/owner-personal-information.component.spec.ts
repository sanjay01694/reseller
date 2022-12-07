import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPersonalInformationComponent } from './owner-personal-information.component';

describe('OwnerPersonalInformationComponent', () => {
  let component: OwnerPersonalInformationComponent;
  let fixture: ComponentFixture<OwnerPersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerPersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerPersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
