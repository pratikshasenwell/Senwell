import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpDeveloperComponent } from './php-developer.component';

describe('PhpDeveloperComponent', () => {
  let component: PhpDeveloperComponent;
  let fixture: ComponentFixture<PhpDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
