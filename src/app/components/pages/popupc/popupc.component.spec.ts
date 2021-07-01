import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcComponent } from './popupc.component';

describe('PopupcComponent', () => {
  let component: PopupcComponent;
  let fixture: ComponentFixture<PopupcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
