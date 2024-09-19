import { getDocs } from "firebase/firestore";
import { API_URL } from "../../utils/global-variables";

export async function getDegreesGithub(grade) {
  const res = await fetch(
    `${API_URL}/darelom-students-data/degrees/2023_24/degrees_${grade}.json`
  );
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

  const data = snapshot.docs.map((doc) => {
    return doc.data();
  });

  const last = snapshot.docs[snapshot.docs.length - 1];

  return {
    data,
    last,
  };
}
