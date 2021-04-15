import { Component, OnInit } from '@angular/core';
import { Facilitator } from '../../models/facilitator';
import { FacilitatorService } from '../../services/facilitator.service';

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

  constructor(private facilitatorService: FacilitatorService) { }

  ngOnInit(): void {
  }

  createFacilitator(): void {
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
      console.log(response);
    });
  }

}
