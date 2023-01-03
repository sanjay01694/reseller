import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWebsitesComponent } from './new-websites.component';

describe('NewWebsitesComponent', () => {
  let component: NewWebsitesComponent;
  let fixture: ComponentFixture<NewWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWebsitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
