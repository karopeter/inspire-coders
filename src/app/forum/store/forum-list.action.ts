import { Action } from '@ngrx/store';
import {Forum } from '../../models/forum';

export const ADD_FORUM = '[Forum List] Add Forum';
export const ALL_FORUM = '[Forum List] All Forum';

export class AddForum implements Action {
  readonly type = ADD_FORUM;

  constructor(public payload: Forum) {}
}

export class AllForum implements Action {
  readonly type = ALL_FORUM;

  constructor(public payload: Forum) {}
}


export type ForumListActions = AddForum | AllForum;
