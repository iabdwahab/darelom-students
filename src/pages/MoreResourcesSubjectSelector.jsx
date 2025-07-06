import { useEffect, useState } from 'react';
import { firebaseDB } from '../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { translate } from '../utils/translations';
import BackStepButton from '../components/books_selector/BackStepButton';
import LoadingSpinner from '../components/global/LoadingSpinner';
import GoHomeButton from '../components/global/buttons/GoHomeButton';

const MoreResourcesSubjectSelector = () => {
  const navigate = useNavigate();

  const { grade, term } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSubjectFirestore() {
      const snapshot = await getDoc(doc(firebaseDB, `${grade}/more_resources/`));
      const subjects = snapshot.data()?.[term] || [];

      setSubjects(subjects);
      setIsLoading(false);
    }

    getSubjectFirestore();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-content-center">
        <h2>اختر مادة:</h2>
        <div className="d-flex gap-2">
          <BackStepButton grade={grade} backFrom="more_resources" />
          <GoHomeButton />
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row g-2 my-2">
          {subjects?.length ? (
            subjects?.map((subject, index) => {
              return (
                <div className="col-sm-6" key={index}>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => navigate(`/${grade}/${term}/more_resources/${subject}`)}
                  >
                    {translate(subject)}
                  </button>
                </div>
              );
            })
          ) : (
            <p className="fw-bold text-center fs-3">عذرًا، لا يوجد مصادر.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MoreResourcesSubjectSelector;
