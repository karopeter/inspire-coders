import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLabelComponent } from './course-label.component';

describe('CourseLabelComponent', () => {
  let component: CourseLabelComponent;
  let fixture: ComponentFixture<CourseLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
