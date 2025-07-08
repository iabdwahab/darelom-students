import { StudentDegreeInterface } from '../types/supabaseStudent';

export function calculateMaxAndTotal(supabaseData: StudentDegreeInterface[]) {
  let max = 0;
  let total = 0;

  const degrees = supabaseData.map((term) => term.degrees).flat();

  degrees.forEach((degree) => {
    if (degree.isCalculatedInTotal) {
      max += degree.finalDegree;

      if (degree.degree.startsWith('/')) {
        total += Number(degree.degree.slice(1));
      } else if (!isNaN(Number(degree.degree))) {
        total += Number(degree.degree);
      }
    }
  });

  return {
    max,
    total,
  };
}
