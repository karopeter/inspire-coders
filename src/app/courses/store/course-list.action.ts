import { Action } from '@ngrx/store';
import { Course } from '../../models/course';

export const CREATE_COURSE = '[Course List] Create Course';
export const LIST_COURSE = '[Course List] List Course';

export class CreateCourse implements Action {
  readonly type = CREATE_COURSE;

  constructor(public payload: Course) {}
}

export class ListCourse implements Action {
  readonly type = LIST_COURSE;

  constructor(public payload: Course) {}
}

export type CourseListActions = CreateCourse | ListCourse;


