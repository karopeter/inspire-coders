import { Component, OnInit } from '@angular/core';
import { Facilitator } from '../../models/facilitator';
import { FacilitatorService } from '../../services/facilitator.service';
import { NotificationService } from './../../services/notification.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as facilitatorList from '../store/facilitator-list.reducer';
import * as FacilitatorListActions from '../store/facilitator-list.action';
import * as fromApp from '../../app.reducer';

@Component({
  selector: 'app-create-facilitator',
  templateUrl: './create-facilitator.component.html',
  styleUrls: ['./create-facilitator.component.scss']
})
export class CreateFacilitatorComponent implements OnInit {
  facilitator: Facilitator;
  firstName = '';
  lastName = '';
  fullName = '';
  username = '';
  address = '';
  email = '';
  phone = '';
  numberOfCoures = 1;
  numberOfForums = 1;
  numberOfStudents = 1;
  courseId = 1;

  constructor(private facilitatorService: FacilitatorService, private route: Router, private notifyService: NotificationService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  createFacilitator(): void {
    this.store.dispatch(new FacilitatorListActions.CreateFacilitator());
    if (this.firstName.length === 0) {
       return;
    }
    this.facilitator = {
      id: 0,
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.fullName,
      username: this.username,
      address: this.address,
      email: this.email,
      phone: this.phone,
      courseId: this.courseId,
      numberOfCoures: this.numberOfCoures,
      numberOfForums: this.numberOfForums,
      numberOfStudents: this.numberOfStudents,
      isDisplayed: true,
      isDeleted: false,
      createdOn: new Date(),
      updatedOn: new Date()
    };
    this.facilitatorService.addFacilitator(this.facilitator).subscribe((response) => {
      this.firstName = '';
      this.route.navigate(['/all-facilitator']);
      this.store.subscribe(data => console.log(data));
      console.log(response);
    });
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Message submitted successfully!!', 'http://tocoder-001-site1.itempurl.com');
  }
}
