import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidDeveloperUkComponent } from './android-developer-uk.component';

describe('AndroidDeveloperUkComponent', () => {
  let component: AndroidDeveloperUkComponent;
  let fixture: ComponentFixture<AndroidDeveloperUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidDeveloperUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidDeveloperUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
