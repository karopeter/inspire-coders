import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Forum } from '../../models/forum';
import {ForumService } from '../../services/forum.service';


@Component({
  selector: 'app-list-forum',
  templateUrl: './list-forum.component.html',
  styleUrls: ['./list-forum.component.scss']
})
export class ListForumComponent implements OnInit {
  totalCourses = 10;
  coursePerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  forums: Forum[];
  name = '';
  forumId;
  view = '';
  selectedForum: number;
  page: number;
  pageSize: number;
  selectedEntry: boolean;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
     this.page = 1;
     this.pageSize = 10;
     this.forumService.getAllForum(1, 10).subscribe((data) => {
       this.forums = data;
       if (this.forums.length > 0) {
         this.selectedForum = this.forums[0].id;
       }
     });
  }

  toggleView(view: string): void {
    this.view = view;
  }

  toggleSelected(selected: number = null): void {
    if (selected) {
      if (this.isSelected(selected)) {
        return;
      }
      this.selectedForum = selected;
      console.log(selected);
      return;
    }
    this.selectedForum = null;
  }

  isSelected(id: number): boolean {
    return id === this.selectedForum;
  }
}
