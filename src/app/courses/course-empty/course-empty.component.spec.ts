import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEmptyComponent } from './course-empty.component';

describe('CourseEmptyComponent', () => {
  let component: CourseEmptyComponent;
  let fixture: ComponentFixture<CourseEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
