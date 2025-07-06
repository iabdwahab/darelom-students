export interface StudentDegreeInterface {
  student_id: number;
  id: string;
  name: string;
  seat_nummer: number;
  grade: number;
  term: number;
  year: number;
  degrees: SubjectDegreeInterface[];
}

export interface SubjectDegreeInterface {
  id: string;
  name: string;
  degree: string;
  finalDegree: number;
  isCalculatedInTotal: boolean;
}
