import { useEffect, useState } from 'react';
import { firebaseDB } from '../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/global/LoadingSpinner';
import GoHomeButton from '../components/global/buttons/GoHomeButton';

const MoreResources = () => {
  const navigate = useNavigate();

  const { grade, term, subject } = useParams();
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSubjectFirestore() {
      let snapshot;

      if (grade) {
        snapshot = await getDoc(doc(firebaseDB, `${grade}/more_resources/${term}/${subject}`));
      } else {
        snapshot = await getDoc(doc(firebaseDB, `general_subjects/${subject}`));
      }

      const resources = snapshot.data()?.resources || [];

      setResources(resources);
      setIsLoading(false);
    }

    getSubjectFirestore();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-content-center">
        <h2>اختر شيئًا:</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-danger" onClick={() => navigate(-1)}>
            رجوع
          </button>
          <GoHomeButton />
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="row g-2 my-2">
          {resources?.length ? (
            resources?.map((resource, index) => {
              return (
                <div className="col-sm-6" key={index}>
                  {/* {resource?.isBook ? <Lin className='btn btn-primary w-100' onClick={() => window.location.href = resource.link}>{resource.title}</Lin> :
                      <button className='btn btn-primary w-100' onClick={() => window.location.href = resource.link}>{resource.title}</button>} */}
                  <Link
                    className="btn btn-primary w-100"
                    to={resource?.isBook ? `/book/${resource.link}` : resource.link}
                    state={{ book_name: resource.title }}
                  >
                    {resource.title}
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="fw-bold text-center fs-3">عذرًا، لا شيء هنا.</p>
          )}
        </div>
      )}
    </>
  );
};

export default MoreResources;
