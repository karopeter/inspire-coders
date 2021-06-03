import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


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

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.courseService.getAllCourse(1, 10).subscribe((data) => {
      this.courses = data;
      if (this.courses.length > 0) {
        this.selectedCourse = this.courses[0].id;
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
