import { limit, orderBy, query, startAfter } from 'firebase/firestore';
import React from 'react';

const LoadMoreButton = ({ degreesCollection, lastStudent, setDataAndHideLoaderFirestore }) => {
  function handleMoreBtn() {
    const q = query(degreesCollection, orderBy('rank', 'asc'), startAfter(lastStudent), limit(40));

    setDataAndHideLoaderFirestore(q);
  }

  return (
    <button className="btn btn-primary w-100" onClick={handleMoreBtn}>
      عرض المزيد
    </button>
  );
};

export default LoadMoreButton;
