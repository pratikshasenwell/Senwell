import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInput.ValidatorComponent } from './file-input.validator.component';

describe('FileInput.ValidatorComponent', () => {
  let component: FileInput.ValidatorComponent;
  let fixture: ComponentFixture<FileInput.ValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileInput.ValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileInput.ValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
