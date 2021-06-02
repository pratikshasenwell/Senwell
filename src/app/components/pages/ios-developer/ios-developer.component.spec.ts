import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosDeveloperComponent } from './ios-developer.component';

describe('IosDeveloperComponent', () => {
  let component: IosDeveloperComponent;
  let fixture: ComponentFixture<IosDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
