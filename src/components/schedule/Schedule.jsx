import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../global/LoadingSpinner';
import { API_URL } from '../../utils/global-variables'
import { translate } from '../../utils/translations'
import { useImageDownloader } from 'use_image_downloader';

const schedule = () => {
  const { grade } = useParams();
  const [isFounded, setIsFounded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = `${API_URL}/darelom-students-data/schedule/${grade}.jpg`;
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
    <div className='container'>
      {isLoading ? <LoadingSpinner /> : <>
        {!isFounded && <>
          <p className='text-center fw-bold fs-5'>عذرًا، جدول {translate(grade)} ليس لدينا بعد.</p>
        </>}
      </>}

      <div className={`d-${isFounded ? 'block' : 'none'}`}>
        <img src={imgSrc} className={`w-100`} alt="Schecule" onError={handleError} onLoad={handleLoading} />
        <button className='btn btn-primary w-100' onClick={() => downloadImage(imgSrc, `جدول محاضرات ${translate(grade)}`)}>تحميل الجدول</button>
      </div>
    </div>
  )
}

export default schedule