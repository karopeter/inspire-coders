import { RouterModule, Routes } from '@angular/router';
import { CodersComponent } from './coders/coders.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CourseCreateComponent } from './courses/course-create/course-create.component';
import { CourseEmptyComponent } from './courses/course-empty/course-empty.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { CourseAddComponent } from './courses/course-add/course-add.component';
import { CourseLabelComponent } from './courses/course-label/course-label.component';
import { CourseReadComponent } from './courses/course-read/course-read.component';
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

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CodersComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-create', component: CourseCreateComponent },
  { path: 'course-empty', component: CourseEmptyComponent },
  { path: 'course-success', component: CourseAddComponent },
  { path: 'course-label', component: CourseLabelComponent },
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
];



