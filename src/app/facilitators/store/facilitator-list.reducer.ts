import { Facilitator } from '../../models/facilitator';
import * as FacilitatorListActions from './facilitator-list.action';

export interface FacilitatorListState {
  facilitators: Facilitator[];
}

export interface AppState {
   facilitatorList: FacilitatorListState;
}

export interface State {
  isLoading: boolean;
}

const initialState  = {
  facilitators: []
};

export function facilitatorListReducer(state: FacilitatorListState = initialState, action: FacilitatorListActions.FacilitatorListActions) {
    switch (action.type) {
      case FacilitatorListActions.CREATE_FACILITATOR:
        return {
          ...state,
          facilitators: [...state.facilitators, action.payload]
        };
        case FacilitatorListActions.ALL_FACILITATOR:
          return {
            ...state,
            facilitators: [...state.facilitators, action.payload]
          };
        default: {
          return state;
        }
    }
}
