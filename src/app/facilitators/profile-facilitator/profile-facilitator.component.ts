import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { Forum } from '../../models/forum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-facilitator',
  templateUrl: './profile-facilitator.component.html',
  styleUrls: ['./profile-facilitator.component.scss']
})
export class ProfileFacilitatorComponent implements OnInit {
  courses: Course[];
  profile = '';
  selectedCourse: number;
  forums: Forum;
  page: number;
  pageSize: number;
  selectedEntry: boolean;
  subscription: Subscription;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.subscription = this.courseService.getAllCourse(1, 10).subscribe((data) => {
      this.courses = data;
      if (this.courses.length > 0) {
        this.selectedCourse = this.courses[0].id;
      }
    });
  }

  toggleProfile(profile: string): void {
    this.profile = profile;
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
