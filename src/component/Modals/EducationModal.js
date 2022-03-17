import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEduValue } from "../../state/score";
const EducationModal = ({ close, submitModal }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  useOnClickOutside(ref, () => close());
  const { eduValue } = useSelector((state) => state.Score);
  const [eduType, setEduType] = useState(eduValue);

  const save = () => {
    let data = {
      1: 25,
      2: 23,
      3: 22,
      4: 21,
      5: 19,
      6: 15,
      7: 5,
    };
    if (eduType) {
      submitModal({ type: "education", data: data[eduType] });
      dispatch(setEduValue(eduType));
    } else {
      alert("Please select education");
    }
  };
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", background: "#21004454", zIndex: 9999 }}
    >
      <div className="modal-dialog" ref={ref}>
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">
              Please select your education level
            </h5>
          </div>
          <div className="modal-body modal-overflow">
            <div
              className={`education-block ${
                eduType == 1 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(1)}
            >
              Doctoral level university degree(phD)
            </div>
            <div
              className={`education-block ${
                eduType == 2 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(2)}
            >
              Master Degree, or professional degree needed to practice in a
              licensed profession
            </div>
            <div
              className={`education-block ${
                eduType == 3 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(3)}
            >
              Two or more certificates, diplomas or degrees. One must be for a
              program of three or more years
            </div>
            <div
              className={`education-block ${
                eduType == 4 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(4)}
            >
              Bachelor degree or deploma for a program of three years or longer,
              or equal
            </div>
            <div
              className={`education-block ${
                eduType == 5 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(5)}
            >
              Two-year program at a university, collage, trade or technical
              school
            </div>
            <div
              className={`education-block ${
                eduType == 6 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(6)}
            >
              One-Year program at a university, collage, trade or technical
              school
            </div>
            <div
              className={`education-block ${
                eduType == 7 ? "education-block-select" : ""
              }`}
              onClick={() => setEduType(7)}
            >
              Secondary diploma(high school graduation)
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={close}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={save}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationModal;
