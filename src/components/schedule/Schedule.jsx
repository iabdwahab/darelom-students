import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../global/LoadingSpinner';
import { API_URL } from '../../utils/global-variables';
import { translate } from '../../utils/translations';
import { useImageDownloader } from 'use_image_downloader';

const schedule = () => {
  const { grade } = useParams();
  const [isFounded, setIsFounded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let imgSrc = '';
  let imageTitle;

  if (grade === 'exams_schedule') {
    imgSrc = `${API_URL}/darelom-students-data/schedule/exams_schedule.jpg`;
    imageTitle = 'جدول امتحانات الفصل الدراسي الثاني 2025';
  } else {
    imgSrc = `${API_URL}/darelom-students-data/schedule/${grade}.jpg`;
    imageTitle = `جدول محاضرات ${translate(grade)}`;
  }
  const downloadImage = useImageDownloader();

  function handleError() {
    setIsFounded(false);
    setIsLoading(false);
  }

  function handleLoading() {
    setIsFounded(true);
    setIsLoading(false);
  }

  return (
    <div className="container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {!isFounded && (
            <>
              <p className="text-center fw-bold fs-5">
                عذرًا، جدول {translate(grade)} ليس لدينا بعد.
              </p>
            </>
          )}
        </>
      )}

      <div className={`d-${isFounded ? 'block' : 'none'}`}>
        <img
          src={imgSrc}
          className={`w-100`}
          alt="Schecule"
          onError={handleError}
          onLoad={handleLoading}
        />
        <button
          className="btn btn-primary w-100 mt-3"
          onClick={() => downloadImage(imgSrc, imageTitle)}
        >
          تحميل الجدول
        </button>
      </div>
    </div>
  );
};

export default schedule;
