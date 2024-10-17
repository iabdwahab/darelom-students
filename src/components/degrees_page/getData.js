import { getCountFromServer, getDocs } from 'firebase/firestore';
import { API_URL } from '../../utils/global-variables';

export async function getDegreesGithub(grade) {
  const res = await fetch(`${API_URL}/darelom-students-data/degrees/2023_24/degrees_${grade}.json`);
  const data = await res.json();

  data.degrees.sort((a, b) => {
    return a.rank - b.rank;
  });

  return {
    degrees: data.degrees,
    studentsCount: data.degrees.length,
  };
}

export async function getDegreesFirestore(q) {
  const snapshot = await getDocs(q);
  const degreesData = snapshot.docs.map((doc) => doc.data());
  const lastStudentData = snapshot.docs[snapshot.docs.length - 1];

  return {
    degreesData,
    lastStudentData,
  };
}

export async function getStudentsCount(degreesCollection) {
  const snapshot = await getCountFromServer(degreesCollection);
  const studentsCount = snapshot.data().count;

  return studentsCount;
}
