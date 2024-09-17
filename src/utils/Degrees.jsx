import { getCountFromServer } from "firebase/firestore";

export function calculateTotal(student, grade) {
  if (typeof student.degrees !== 'string') {

    for (let i = 0; i < student.degrees.length; i++) {
      let degree = student.degrees[i];

      if (grade === 'grade_1' || grade === 'grade_2') {
        if (i === 1) {
          continue;
        }
      }

      if (degree.startsWith('/')) {
        degree = degree.substring(1);
      }

      if (!isNaN(Number(degree))) {
        student.total += Number(degree);
      }
    }

  }
}

export function calculatePercentage(total, grade) {
  const fullMark = {
    "grade_1": 1300,
    "grade_2": 1400,
    "grade_3": 1400,
    "grade_4": 1400,
  }

  return `${(total * 100 / fullMark[grade]).toFixed(2)}`
}

export async function getStudentsCount(degreesCollection) {
  const snapshot = await getCountFromServer(degreesCollection);
  const studentsCount = snapshot.data().count;

  return studentsCount;
}