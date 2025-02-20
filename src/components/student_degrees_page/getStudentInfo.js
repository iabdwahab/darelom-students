import { firebaseDB } from '../../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import { API_URL } from '../../utils/global-variables';

export async function getStudentInfoGithub(grade, year, studentId, setSubjects) {
  const res = await fetch(`${API_URL}/darelom-students-data/degrees/${year}/degrees_${grade}.json`);
  const data = await res.json();

  let student;

  data.degrees.forEach((arrayStudent) => {
    if (arrayStudent.id == studentId) {
      student = arrayStudent;
    }
  });

  setSubjects(data.subjects);
  return student;
}

export async function getStudentInfoFirestore(grade, year, studentId) {
  const docRef = doc(firebaseDB, `${grade}/degrees/${year}`, studentId);
  const docSnap = await getDoc(docRef);

  return docSnap.data(); // student
}
