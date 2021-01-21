import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReadComponent } from './course-read.component';

describe('CourseReadComponent', () => {
  let component: CourseReadComponent;
  let fixture: ComponentFixture<CourseReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
