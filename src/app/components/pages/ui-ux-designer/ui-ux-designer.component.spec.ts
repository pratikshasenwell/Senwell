import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUxDesignerComponent } from './ui-ux-designer.component';

describe('UiUxDesignerComponent', () => {
  let component: UiUxDesignerComponent;
  let fixture: ComponentFixture<UiUxDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiUxDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiUxDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
