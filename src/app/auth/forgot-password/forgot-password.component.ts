import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ForgetPassword } from './../../models/forget-password.model';
import { NotificationService } from '../../services/notification.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
import * as AuthActions from '../store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  forgetPassword: any = {};
  storeSub: Subscription;
  constructor(private authService: AuthService, private notifyService: NotificationService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onForgetPassword(form: NgForm): void {
    console.log(this.forgetPassword);
    this.storeSub = this.authService.forgetPassword(this.forgetPassword).subscribe(response => {
      console.log('Password Reset' + response);
      // this.forgetPassword.username = '';
      // this.forgetPassword.oldPassword = '';
      // this.forgetPassword.newPassword = '';
      this.store.dispatch(new AuthActions.ForgetPassword({username: username, oldPassword: oldPassword, newPassword: newPassword}));
    }, errorMessage => {
      console.log(errorMessage);
    });
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Password reset successfully!!', 'http://tocoder-001-site1.itempurl.com');
  }
}
