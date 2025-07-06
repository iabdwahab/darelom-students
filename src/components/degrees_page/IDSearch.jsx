import { useEffect, useRef, useState } from 'react';
import SpinnerButton from '../global/SpinnerButton';
import { useNavigate, useParams } from 'react-router-dom';
import { firebaseDB } from '../../utils/firebaseInit';
import { doc, getDoc } from 'firebase/firestore';

const IDSearch = () => {
  const { grade } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const form = formRef.current;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      try {
        setIsSending(true);

        const studentId = form['student_id-input'].value;

        if (form.checkValidity()) {
          const docRef = doc(firebaseDB, `${grade}/degrees/2023_24`, studentId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            navigate(`${studentId}`);
          } else {
            form.classList.add('was-validated');
          }

          formRef.current.reset();
        } else {
          form.classList.add('was-validated');
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsSending(false);
      }
    });
  }, []);

  return (
    <form className="row g-3 mt-0 needs-validation" noValidate ref={formRef}>
      <p className="mb-2 fw-bold">ابحث برقم الجلوس:</p>
      <div className="col-12 col-sm-10 m-0 mb-2">
        <input
          type="text"
          className="form-control py-2"
          id="student_id-input"
          placeholder="رقم الجلوس"
          minLength={5}
          maxLength={5}
          required
        />
        <div className="invalid-feedback">رقم الجلوس غير موجود.</div>
      </div>
      <div className="col-12 col-sm-2 m-0">
        {isSending ? (
          <SpinnerButton />
        ) : (
          <button type="submit" className="btn btn-primary mb-3 py-2 w-100">
            ابحث
          </button>
        )}
      </div>
    </form>
  );
};

export default IDSearch;
