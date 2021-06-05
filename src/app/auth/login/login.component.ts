import { Component, OnInit, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { AlertComponent } from '../../shared/alert/alert.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceholderDirective } from '../../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
   auth: any = {};
   error!: string;
   @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
   private closeSub: Subscription;
  constructor(private authService: AuthService, private router: Router, private notifyService: NotificationService, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    console.log(this.auth);
    this.authService.login(this.auth).subscribe(resData => {
      console.log('Message sent' + resData);
      this.auth.username = '';
      this.auth.password = '';
      this.router.navigate(['/dashboard']);
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
    this.error = null as any;
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
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
