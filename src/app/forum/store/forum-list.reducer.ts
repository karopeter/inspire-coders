import {Forum } from '../../models/forum';
import * as ForumListActions from './forum-list.action';

export interface ForumListState {
  forums: Forum[];
}

export interface AppState {
  forumList: ForumListState;
}

export interface State {
  isLoading: boolean;
}

const initialState = {
  forums: []
};


export function forumListReducer(state: ForumListState = initialState, action: ForumListActions.ForumListActions) {
    switch (action.type) {
      case ForumListActions.ADD_FORUM:
        return {
          ...state,
          forums: [...state.forums, action.payload]
        };
      case ForumListActions.ALL_FORUM:
        return {
          ...state,
          forums: [...state.forums, action.payload]
        };
      default: {
        return state;
      }
    }
}
