export interface Forum {
  id: number;
  name: string;
  numberOfStudents: number;
  courseId: number;
  instructorId: number;
  startDate: string;
  maxSize: number;
  isDisplayed: boolean;
  isDeleted: boolean;
  createdOn: Date;
  updatedOn: Date;
}

