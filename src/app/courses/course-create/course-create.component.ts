import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss']
})
export class CourseCreateComponent implements OnInit {
  course: Course;
  title = '';
  code = '';
  description = '';
  level = '';
  numberOfStudents = 2;

  constructor(private courseService: CourseService, private toasterService: ToasterService) { }

  ngOnInit(): void {
  }

    createCourse(): void {
     if (this.title.length === 0) {
       return;
     }
     this.course = {
       id: 0,
       title: this.title,
       code: this.code,
       description: this.description,
       level: this.level,
       numberOfStudents: this.numberOfStudents,
       isDisplayed: true,
       isDeleted: false,
       createdOn: new Date(),
       updatedOn: new Date()
     };
     this.courseService.addCourse(this.course).subscribe((response) => {
      this.title = '';
      console.log(response);
    });
   }

   showToasterSuccess(): void {
     this.toasterService.showSuccess('Course created successfully!!', 'http://coders150321-001-site1.itempurl.com');
   }
}
