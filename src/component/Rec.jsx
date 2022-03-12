import { mview2 } from '../state/modals.js';
import { useDispatch } from 'react-redux';
import L1 from './reco/L1.jsx';
import L2 from './reco/L2.jsx';
import { useState } from 'react';

function Rec() {
  const dispatch = useDispatch();

  const b1 = (
    <>
      {/* <button
        type="button"
        className="btn btn-dark"
        data-bs-dismiss="modal"
        onClick={() => {
            setLayer(<L2/>)
            setBtn(b2)
            setTxt("PNP Suggest")
        }}
      >
        Check PNP Suggest
          </button>*/}
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
    </>
  );

  const b2 = (
    <>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-dismiss="modal"
        onClick={() => {
            setLayer(<L1/>)
            setBtn(b1)
            setTxt("Recommendations")
        }}
      >
        Back
      </button>
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
    </>
  );
  const [btn, setBtn] = useState(b1);
  const [layer, setLayer] = useState(<L1/>);
  const [txt, setTxt]= useState("Recommendations")

  return (
    <div
      className="modal"
      style={{ display: 'block', background: '#21004454', zIndex: 5 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">{txt}</h5>
          </div>
          <div className="modal-body">
      {layer}
          </div>
          <div className="modal-footer">{btn}</div>
        </div>
      </div>
    </div>
  );
}

export default Rec;
