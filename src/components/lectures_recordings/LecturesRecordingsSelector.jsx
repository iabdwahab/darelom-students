import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../global/LoadingSpinner';
import BackStepButton from './BackStepButton';
import SectionHeading from '../global/SectionHeading';
import { translate } from '../../utils/translations';
import { firebaseDB } from '../../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';
import Button from '../global/Button';
import GoHomeButton from '../global/buttons/GoHomeButton';

const LecturesRecordingsSelector = () => {
  const { grade, term } = useParams();
  const [recordings, setRecordings] = useState({});
  const [sortedRecordingsKeys, setSortedRecordingsKeys] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDoc(doc(firebaseDB, `${grade}/lectures_recordings`)).then((snapshot) => {
      const data = snapshot.data()?.[term];

      if (data && Object.keys(data).length) {
        const DataKeys = Object.keys(data);

        // Make Mojalad_Tasgilat on the top always.
        if (DataKeys.includes('mojalad_tasgilat')) {
          const orderedData = [
            'mojalad_tasgilat',
            ...DataKeys.filter((item) => item !== 'mojalad_tasgilat'),
          ];
          setSortedRecordingsKeys(orderedData);
        } else {
          setSortedRecordingsKeys(DataKeys);
        }

        setRecordings(data);
      }

      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-content-center mb-3">
        <h2>اختر مادة:</h2>
        <div className="d-flex gap-2">
          <BackStepButton grade={grade} backFrom="lectures_recordings" />
          <GoHomeButton />
        </div>
      </div>

      <SectionHeading>
        {translate(grade)} - {translate(term)}
      </SectionHeading>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {Object.keys(recordings).length ? (
            <div className="row g-2 my-2">
              {sortedRecordingsKeys.map((record, index) => {
                return (
                  <div className="col-sm-6" key={index}>
                    <Button
                      text={translate(record)}
                      onClick={() => (window.location.href = recordings[record])}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-center fw-bold mt-4 fs-4">عذرًا، لا تتوفر تسجيلات.</p>
          )}
        </>
      )}
    </>
  );
};

export default LecturesRecordingsSelector;
