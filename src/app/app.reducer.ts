import { ForumListState, forumListReducer } from './forum/store/forum-list.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { FacilitatorListState, facilitatorListReducer } from './facilitators/store/facilitator-list.reducer';

export const rootReducer = {};

export interface State {
  forumList: ForumListState;
  facilitatorList: FacilitatorListState;
}

export const reducers: ActionReducerMap<State, any> = {
    forumList: forumListReducer,
    facilitatorList: facilitatorListReducer
};

export const getForumState = createFeatureSelector<ForumListState>('forum');

export const getFacilitatorState = createFeatureSelector<FacilitatorListState>('facilitator');
