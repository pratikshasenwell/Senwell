import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNativeDeveloperComponent } from './react-native-developer.component';

describe('ReactNativeDeveloperComponent', () => {
  let component: ReactNativeDeveloperComponent;
  let fixture: ComponentFixture<ReactNativeDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactNativeDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactNativeDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
