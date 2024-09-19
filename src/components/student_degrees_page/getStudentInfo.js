import { app } from "../../utils/firebaseInit";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { API_URL } from "../../utils/global-variables";

export async function getStudentInfoGithub(grade, studentId, setSubjects) {
  const res = await fetch(
    `${API_URL}/darelom-students-data/degrees/2023_24/degrees_${grade}.json`
  );
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

export async function getStudentInfoFirestore(grade, studentId) {
  const db = getFirestore();
  const docRef = doc(db, `${grade}/degrees/2023_24`, studentId);
  const docSnap = await getDoc(docRef);

  return docSnap.data(); // student
}
