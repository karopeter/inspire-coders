import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   auth: any = {};
  constructor(private authService: AuthService, private route: Router, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(this.auth);
    this.authService.signup(this.auth).subscribe(resData => {
      console.log('Message Sent' + resData);
      this.route.navigate(['/login']);
      this.auth.username = '';
      this.auth.email = '';
      this.auth.firstName = '';
      this.auth.lastName = '';
      this.auth.password = '';
    }, errorMessage => {
      console.log(errorMessage);
    });
    form.reset();
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('SignedUp Successfuly!!', 'http://tocoder-001-site1.itempurl.com');
  }
}
