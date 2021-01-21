import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodersComponent } from './coders.component';

describe('CodersComponent', () => {
  let component: CodersComponent;
  let fixture: ComponentFixture<CodersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
