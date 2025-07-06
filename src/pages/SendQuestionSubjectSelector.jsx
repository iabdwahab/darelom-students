import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { firebaseDB } from '../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import { translate } from '../utils/translations';
import LoadingSpinner from '../components/global/LoadingSpinner';

const SendQuestionSubjectSelector = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { grade, term } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getDoc(doc(firebaseDB, `${grade}/test_yourself_students/questions/${term}`)).then(
      (snapshot) => {
        setSubjects(snapshot.data().subjects);
        setIsLoading(false);
      },
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row g-2">
          {subjects.map((subject, index) => {
            return (
              <div className="col-sm-6" key={index}>
                <button
                  className="btn btn-primary w-100 p-2"
                  onClick={() => navigate(`/${grade}/${term}/${subject}/send_question`)}
                >
                  {translate(subject)}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SendQuestionSubjectSelector;
