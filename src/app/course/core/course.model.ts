export class CourseModel {
  id: number;
  name: string;
  teacherId: number;
  startDate: string;
  endDate: string;
  location: string;
  address: string;
  state: string;
  studentIds?: number[];
  description?: string;
}
