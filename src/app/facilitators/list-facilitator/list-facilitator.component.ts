import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Facilitator } from '../../models/facilitator';
import { Store } from '@ngrx/store';
import { FacilitatorService } from '../../services/facilitator.service';
import { Subscription } from 'rxjs';
import * as facilitatorList from '../store/facilitator-list.reducer';
import * as FacilitatorListActions from '../store/facilitator-list.action';
import * as fromApp from '../../app.reducer';


@Component({
  selector: 'app-list-facilitator',
  templateUrl: './list-facilitator.component.html',
  styleUrls: ['./list-facilitator.component.scss']
})
export class ListFacilitatorComponent implements OnInit{
  totalCourses = 10;
  coursePerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  facilitators: Facilitator[];
  fullName = '';
  facilitatorId;
  view = '';
  selectedFacilitator: number;
  page: number;
  pageSize: number;
  selectedEntry: boolean;

  private exChangedSubscription: Subscription;

  constructor(private facilitatorService: FacilitatorService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.exChangedSubscription = this.facilitatorService.getAllFacilitator(1, 10).subscribe((data) => {
      this.facilitators = data;
      if (this.facilitators.length > 0) {
         this.selectedFacilitator = this.facilitators[0].id;
      } else {
        this.store.select('facilitatorList');
        this.store.dispatch(new FacilitatorListActions.AllFacilitator());
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
      this.selectedFacilitator = selected;
      console.log(selected);
      return;
    }
    this.selectedFacilitator = null;
  }

  isSelected(id: number): boolean {
    return id === this.selectedFacilitator;
  }
}


