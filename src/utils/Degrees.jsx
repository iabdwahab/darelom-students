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

export async function getStudentsCount(degreesCollection) {
  const snapshot = await getCountFromServer(degreesCollection);
  const studentsCount = snapshot.data().count;

  return studentsCount;
}