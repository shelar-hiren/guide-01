import { mview2 } from '../state/modals.js';
import L1 from './Slanguage/L1.jsx';
import L2 from './Slanguage/L2.jsx';
import Score from './Slanguage/Score.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function SLanguage() {
  const dispatch = useDispatch();

  const next = useSelector((state) => state.Sidioma.next);

  const a2 = (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
        onClick={() => {
          dispatch(mview2());
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          setLayer(<L1 />);
          setLayerfooter(a1);
          setH2('Select Language');
        }}
        type="button"
        className="btn btn-outline-secondary"
        disabled={next}
      >
        Back
      </button>
    </>
  );

  const a1 = (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
        onClick={() => {
          dispatch(mview2());
        }}
      >
        Close
      </button>
      <button
        onClick={() => {
          setLayer(<L2 />);
          setLayerfooter(a2);
          setH2(<Score />);
        }}
        type="button"
        className="btn btn-outline-secondary"
        disabled={next}
      >
        Next
      </button>
    </>
  );

  const [layer, setLayer] = useState(<L1 />);
  const [layerfooter, setLayerfooter] = useState(a1);
  const [h2, setH2] = useState('Select Language');

  useEffect(() => {
    setLayerfooter(a1);
    //eslint-disable-next-line
  }, [next]);

  return (
    <div
      className="modal"
      style={{ display: 'block', background: '#21004454', zIndex: 5 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">{h2}</h5>
          </div>
          <div className="modal-body">{layer}</div>
          <div className="modal-footer">{layerfooter}</div>
        </div>
      </div>
    </div>
  );
}

export default SLanguage;
