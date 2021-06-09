import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationService } from '../../services/notification.service';
import * as fromApp from '../../app.reducer';
import * as AuthActions from '../store/auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
   auth: any = {};
   error: string;
   isLoading = false;
   private storeSub: Subscription;
  constructor(private authService: AuthService, private route: Router,  private notifyService: NotificationService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('auth').subscribe(authState => {
       this.isLoading = authState.loading;
       this.error = authState.authError;
     });
  }

  onSubmit(form: NgForm): void {
    console.log(this.auth);
     this.authService.registerUser(this.auth).subscribe(resData => {
      console.log('Message Sent' + resData);
      // this.auth.username = '';
      // this.auth.email = '';
      // this.auth.firstName = '';
      // this.auth.lastName = '';
      // this.auth.password = '';
      this.store.dispatch(new AuthActions.SignupStart({firstName: firstName, lastName: lastName, email: email, username: username, password: password}));
      this.route.navigate(['/login']);
    }, errorMessage => {
      console.log(errorMessage);
    });
    form.reset();
  }

  onHandleError(): void {
    this.store.dispatch(new AuthActions.ClearError());
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();  // hack
    }
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('SignedUp Successfuly!!', 'http://tocoder-001-site1.itempurl.com');
  }
}
