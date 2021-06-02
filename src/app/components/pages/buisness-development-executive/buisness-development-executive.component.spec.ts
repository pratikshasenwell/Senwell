import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessDevelopmentExecutiveComponent } from './buisness-development-executive.component';

describe('BuisnessDevelopmentExecutiveComponent', () => {
  let component: BuisnessDevelopmentExecutiveComponent;
  let fixture: ComponentFixture<BuisnessDevelopmentExecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisnessDevelopmentExecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessDevelopmentExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
