import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMobileAppsComponent } from './new-mobile-apps.component';

describe('NewMobileAppsComponent', () => {
  let component: NewMobileAppsComponent;
  let fixture: ComponentFixture<NewMobileAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMobileAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMobileAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
