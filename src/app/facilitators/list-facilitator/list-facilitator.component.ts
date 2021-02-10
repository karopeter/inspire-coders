import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-facilitator',
  templateUrl: './list-facilitator.component.html',
  styleUrls: ['./list-facilitator.component.scss']
})
export class ListFacilitatorComponent implements OnInit {
  totalCourses = 10;
  coursePerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
