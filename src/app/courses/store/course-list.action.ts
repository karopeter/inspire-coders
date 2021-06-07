import { Action } from '@ngrx/store';
import { Course } from '../../models/course';

export const CREATE_COURSE = 'CREATE_COURSE';
export const LIST_COURSE = 'LIST_COURSE';

export class CreateCourse implements Action {
  readonly type =   CREATE_COURSE;

  constructor(public payload: Course) {}
}

export class ListCourse implements Action {
  readonly type = LIST_COURSE;

  constructor(public payload: Course) {}
}

export type CourseListActions = CreateCourse | ListCourse;


