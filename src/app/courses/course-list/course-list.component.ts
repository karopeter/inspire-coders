import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromApp from '../../app.reducer';
import * as CourseListActions from '../store/course-list.action';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  totalCourses = 10;
  coursePerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  courses: Course[];
  user = '';
  selectedCourse: number;
  page: number;
  pageSize: number;
  selectedEntry: boolean;
  subscription: Subscription;

  constructor(private courseService: CourseService, private router: Router, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.subscription = this.courseService.getAllCourse(1, 10).subscribe((data) => {
      this.courses = data;
      if (this.courses.length > 0) {
        this.selectedCourse = this.courses[0].id;
      } else {
        this.store.select('courseList');
        this.store.dispatch(new CourseListActions.ListCourse());
      }
    });
  }

  toggleUser(user: string): void {
    this.user = user;
  }

  toggleCourse(selected: number = null): void {
    if (selected) {
       if (this.isSelected(selected)) {
         return;
       }
       this.selectedCourse = selected;
       console.log(selected);
       return;
    }
    this.selectedCourse = null;
  }

  isSelected(id: number): boolean {
    return id === this.selectedCourse;
  }

}
