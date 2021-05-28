import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ForgetPassword } from './../../models/forget-password.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPassword: any = {};
  constructor(private authService: AuthService, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  onForgetPassword(form: NgForm): void {
    console.log(this.forgetPassword);
    this.authService.forgetPassword(this.forgetPassword).subscribe(response => {
      console.log('Password Reset' + response);
      this.forgetPassword.username = '';
      this.forgetPassword.oldPassword = '';
      this.forgetPassword.newPassword = '';
    }, errorMessage => {
      console.log(errorMessage);
    });
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Password reset successfully!!', 'http://tocoder-001-site1.itempurl.com');
  }
}
