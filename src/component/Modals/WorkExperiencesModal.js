import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setExpValue } from "../../state/score";
const WorkExperiencesModal = ({ close, submitModal }) => {
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
  const { expValue } = useSelector((state) => state.Score);
  const [exp, setExp] = useState(expValue);

  const save = () => {
    let data = {
      1: 0,
      2: 9,
      3: 11,
      4: 13,
      5: 15,
    };
    if (exp) {
      submitModal({ type: "workExp", data: data[exp] });
      dispatch(setExpValue(exp));
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
              Please select your work experience
            </h5>
          </div>
          <div className="modal-body">
            <div
              className={`education-block ${
                exp == 1 ? "education-block-select" : ""
              }`}
              onClick={() => setExp(1)}
            >
              No Experience
            </div>
            <div
              className={`education-block ${
                exp == 2 ? "education-block-select" : ""
              }`}
              onClick={() => setExp(2)}
            >
              1 Year
            </div>
            <div
              className={`education-block ${
                exp == 3 ? "education-block-select" : ""
              }`}
              onClick={() => setExp(3)}
            >
              2 or 3 Years
            </div>
            <div
              className={`education-block ${
                exp == 4 ? "education-block-select" : ""
              }`}
              onClick={() => setExp(4)}
            >
              4 or 5 Years
            </div>
            <div
              className={`education-block ${
                exp == 5 ? "education-block-select" : ""
              }`}
              onClick={() => setExp(5)}
            >
              More than 6 Years
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
export default WorkExperiencesModal;
