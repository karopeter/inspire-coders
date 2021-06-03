import { Component, OnInit } from '@angular/core';
import { Forum } from '../../models/forum';
import { ForumService } from '../../services/forum.service';
import { NotificationService } from './../../services/notification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ForumListActions from '../store/forum-list.action';

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
  subscription: Subscription;

  constructor(private forumService: ForumService,  private route: Router, private notifyService: NotificationService,
    private store: Store<{forumList: {forums: Forum[]}}>) {}

  ngOnInit(): void {
  }

  createForum(): void {
    this.store.dispatch(new ForumListActions.AddForum());
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
       this.route.navigate(['/list-forum']);
       this.store.subscribe(data => console.log(data));
       console.log(response);
    });
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Message submitted successfully!!!', 'http://tocoder-001-site1.itempurl.com');
  }
}
