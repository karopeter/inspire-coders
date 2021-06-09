import { Component, OnInit, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { AlertComponent } from '../../shared/alert/alert.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PlaceholderDirective } from '../../shared/placeholder/placeholder.directive';
import * as fromApp from '../../app.reducer';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
   auth: any = {};
   error!: string;
   isLoading = false;
   private storeSub: Subscription;
   @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
   private closeSub: Subscription;
  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService, private componentFactoryResolver: ComponentFactoryResolver, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
    });
  }

  onSubmit(form: NgForm): void {
    console.log(this.auth);
    this.authService.login(this.auth).subscribe(resData => {
      console.log('Message sent' + resData);
      // this.auth.username = '';
      // this.auth.password = '';
      this.router.navigate(['/dashboard']);
      this.store.dispatch(new AuthActions.LoginStart({username: username, password: password}));
    }, errorMessage => {
      console.log(errorMessage);
      this.showErrorAlert(errorMessage);
    });
    form.reset();
  }

  showToasterSuccess(): void {
    this.notifyService.showSuccess('Logged in Successfully!!', 'http://tocoder-001-site1.itempurl.com');
  }

  onHandleError(): void {
    this.store.dispatch(new AuthActions.ClearError());
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentResolver(AlertComponent);
    const hostViewContainerRef = this.alertHost.ViewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
