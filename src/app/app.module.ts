import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CodersComponent } from './coders/coders.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { OrbitComponent } from './coders/orbit.component';
import { FormComponent } from './coders/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ForumComponent } from './coders/forum.component';
import { CourseReadComponent } from './courses/course-read/course-read.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SideNavComponent } from './courses/side-nav/side-nav.component';
import { CourseHeaderComponent } from './courses/course-header/course-header.component';
import { CourseEmptyComponent } from './courses/course-empty/course-empty.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseLabelComponent } from './courses/course-label/course-label.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { AddFacilitatorComponent } from './facilitators/add-facilitator/add-facilitator.component';
import { CreateFacilitatorComponent } from './facilitators/create-facilitator/create-facilitator.component';
import { EditFacilitatorComponent } from './facilitators/edit-facilitator/edit-facilitator.component';
import { ListFacilitatorComponent } from './facilitators/list-facilitator/list-facilitator.component';
import { AddForumComponent } from './forum/add-forum/add-forum.component';
import { CreateForumComponent } from './forum/create-forum/create-forum.component';
import { ListForumComponent } from './forum/list-forum/list-forum.component';
import { ProfileFacilitatorComponent } from './facilitators/profile-facilitator/profile-facilitator.component';
import { ConfirmPasswordComponent } from './auth/confirm-password/confirm-password.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { ToasterComponent } from './toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CodersComponent,
    SignupComponent,
    LoginComponent,
    OrbitComponent,
    FormComponent,
    ForumComponent,
    CourseReadComponent,
    CourseCreateComponent,
    ForgotPasswordComponent,
    SideNavComponent,
    CourseHeaderComponent,
    CourseEmptyComponent,
    CourseAddComponent,
    CourseLabelComponent,
    CourseListComponent,
    AddFacilitatorComponent,
    CreateFacilitatorComponent,
    EditFacilitatorComponent,
    ListFacilitatorComponent,
    AddForumComponent,
    CreateForumComponent,
    ListForumComponent,
    ProfileFacilitatorComponent,
    ConfirmPasswordComponent,
    CourseDetailsComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: CodersComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'course-create', component: CourseCreateComponent },
      { path: 'course-empty', component: CourseEmptyComponent },
      { path: 'course-success', component: CourseAddComponent },
      { path: 'course-label', component: CourseLabelComponent },
      { path: 'course-details', component: CourseDetailsComponent },
      { path: 'course-read', component: CourseReadComponent },
      { path: 'course-list', component: CourseListComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'confirm-password', component: ConfirmPasswordComponent },
      { path: 'add-facilitator', component: AddFacilitatorComponent },
      { path: 'create-facilitator', component: CreateFacilitatorComponent },
      { path: 'edit-facilitator', component: EditFacilitatorComponent },
      { path: 'all-facilitator', component: ListFacilitatorComponent },
      { path: 'profile-facilitator', component: ProfileFacilitatorComponent },
      { path: 'forum', component: AddForumComponent },
      { path: 'create-forum', component: CreateForumComponent },
      { path: 'list-forum', component: ListForumComponent }
    ]),
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
