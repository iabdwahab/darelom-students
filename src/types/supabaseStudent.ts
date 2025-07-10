export interface StudentDegreeInterface {
  student_id: number;
  id: string;
  name: string;
  seat_number: number;
  grade: number;
  term: number;
  year: number;
  degrees: SubjectDegreeInterface[];
  rank: number;
  total_degree: {
    total: number;
    percentage: string;
  };
}

export interface SubjectDegreeInterface {
  id: string;
  name: string;
  degree: string;
  finalDegree: number;
  isCalculatedInTotal: boolean;
}
