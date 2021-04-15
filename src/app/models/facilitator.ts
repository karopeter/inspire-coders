export interface Facilitator {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    username: string;
    address: string;
    email: string;
    phone: string;
    courseId: number;
    numberOfCoures: number;
    numberOfForums: number;
    numberOfStudents: number;
    isDisplayed: boolean;
    isDeleted: boolean;
    createdOn: Date;
    updatedOn: Date;
}

