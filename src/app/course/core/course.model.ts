export class CourseModel {
  id: number;
  name: string;
  description: string;
  teacherId: number;
  studentIds?: number[];
  date: string;
}
