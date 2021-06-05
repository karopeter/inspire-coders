import { ForumListState, forumListReducer } from './forum/store/forum-list.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { FacilitatorListState, facilitatorListReducer } from './facilitators/store/facilitator-list.reducer';
import * as fromAuth from './auth/store/auth.reducer';

export const rootReducer = {};

export interface AppState {
  forumList: ForumListState;
  facilitatorList: FacilitatorListState;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
    forumList: forumListReducer,
    facilitatorList: facilitatorListReducer,
    auth: fromAuth.authReducer
};

export const getForumState = createFeatureSelector<ForumListState>('forum');

export const getFacilitatorState = createFeatureSelector<FacilitatorListState>('facilitator');
