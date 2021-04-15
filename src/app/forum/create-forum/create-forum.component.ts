import { Component, OnInit } from '@angular/core';
import { Forum } from '../../models/forum';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.component.html',
  styleUrls: ['./create-forum.component.scss']
})
export class CreateForumComponent implements OnInit {
  forum: Forum;
  name = '';
  numberOfStudents = 1;
  courseId = 1;
  instructorId = 1;
  startDate = '';
  maxSize = 1;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  createForum(): void {
    if (this.name.length === 0) {
      return;
    }
    this.forum = {
      id: 0,
      name: this.name,
      numberOfStudents: this.numberOfStudents,
      courseId: this.courseId,
      instructorId: this.instructorId,
      startDate: this.startDate,
      maxSize: this.maxSize,
      isDisplayed: true,
      isDeleted: false,
      createdOn: new Date(),
      updatedOn: new Date()
    };
    this.forumService.addForum(this.forum).subscribe((response) => {
       this.name = '';
       console.log(response);
    });
  }

}
