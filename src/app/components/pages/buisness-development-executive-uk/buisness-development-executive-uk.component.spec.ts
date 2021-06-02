import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessDevelopmentExecutiveUkComponent } from './buisness-development-executive-uk.component';

describe('BuisnessDevelopmentExecutiveUkComponent', () => {
  let component: BuisnessDevelopmentExecutiveUkComponent;
  let fixture: ComponentFixture<BuisnessDevelopmentExecutiveUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisnessDevelopmentExecutiveUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessDevelopmentExecutiveUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
