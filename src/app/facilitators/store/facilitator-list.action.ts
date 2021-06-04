import { Action } from '@ngrx/store';
import { Facilitator } from './../../models/facilitator';

export const CREATE_FACILITATOR = 'CREATE_FACILITATOR';
export const ALL_FACILITATOR = 'ALL_FACILITATOR';


export class CreateFacilitator implements Action  {
    readonly type = 'CREATE_FACILITATOR';

    constructor(public payload: Facilitator) {}
}

export class AllFacilitator implements Action {
  readonly type = 'ALL_FACILITATOR';

  constructor(public payload: Facilitator) {}
}

export type FacilitatorListActions = CreateFacilitator | AllFacilitator;
