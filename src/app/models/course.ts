export interface Course {
  id: number;
  title: string;
  code: string;
  description: string;
  numberOfStudents: number;
  level: string;
  isDisplayed: boolean;
  isDeleted: boolean;
  createdOn: Date;
  updatedOn: Date;
}
