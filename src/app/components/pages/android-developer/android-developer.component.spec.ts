import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidDeveloperComponent } from './android-developer.component';

describe('AndroidDeveloperComponent', () => {
  let component: AndroidDeveloperComponent;
  let fixture: ComponentFixture<AndroidDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
