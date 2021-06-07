import { Course } from '../../models/course';
import * as CourseListActions from '../store/course-list.action';

export interface CourseListState {
   courses: Course[];
}

export interface AppState {
   courseList: CourseListState;
}

export interface State   {
   isLoading: boolean;
}

const initialState = {
  courses: null as any
};


export function courseReducer(state: CourseListState = initialState, action: CourseListActions.CourseListActions) {
   switch (action.type) {
     case CourseListActions.CREATE_COURSE:
       return {
         ...state,
         courses: [...state.courses, action.payload]
       };
     case CourseListActions.LIST_COURSE:
       return {
         ...state,
         courses: [...state.courses, action.payload]
       };
      default: {
        return state;
      }
   }
}
