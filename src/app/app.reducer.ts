import { ForumListState, forumListReducer } from './forum/store/forum-list.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface State {
  forumList: ForumListState;
}

export const reducers: ActionReducerMap<State, any> = {
    forumList: forumListReducer
};
