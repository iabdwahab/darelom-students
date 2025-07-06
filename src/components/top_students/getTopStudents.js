import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { API_URL } from '../../utils/global-variables';
import { firebaseDB } from '../../utils/firebaseInit';

export async function getTopStudentsFirestore() {
  const data = [
    {
      grade: 'grade_1',
      grade_ar_name: 'الفرقة الأولى',
    },
    {
      grade: 'grade_2',
      grade_ar_name: 'الفرقة الثانية',
    },
    {
      grade: 'grade_3',
      grade_ar_name: 'الفرقة الثالثة',
    },
    {
      grade: 'grade_4',
      grade_ar_name: 'الفرقة الرابعة',
    },
  ];

  // Loop on grades and retrieve top 3 students
  for (let i = 1; i <= 4; i++) {
    // Get Top 3 Students
    const q = query(
      collection(firebaseDB, `grade_${i}/degrees/2023_24`),
      orderBy('rank'),
      limit(3),
    );

    const degreesList = [];
    const snapshot = await getDocs(q);

    snapshot.docs.forEach((doc) => {
      degreesList.push(doc.data());
    });

    data[i - 1].list = degreesList;
  }

  return data;
}

export async function getTopStudentsGithub() {
  const res = await fetch(`${API_URL}/darelom-students-data/top_degrees.json`);

  return await res.json();
}
