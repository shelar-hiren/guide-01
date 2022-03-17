import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { setArrange } from "../../state/score";
import { useDispatch } from "react-redux";

const ArrangementModal = ({ close, submitModal }) => {
  const ref = useRef();

  const [selected, setSelected] = useState("yes");
  const dispatch = useDispatch();
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
  const save = () => {
    submitModal({ type: "arrangement", data: selected ? 10 : 0 });
    dispatch(setArrange(selected ? 10 : 0));
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
              Do you have a valid job offer?
            </h5>
          </div>
          <div className="modal-body">
            <button
              type="button"
              className={`btn w-100 mb-3 ${
                selected === "yes" ? "btn-secondary" : "btn-outline-secondary"
              }`}
              onClick={() => setSelected("yes")}
            >
              Yes
            </button>

            <button
              type="button"
              className={`btn w-100 ${
                selected === "yes" ? "btn-outline-secondary" : "btn-secondary"
              }`}
              onClick={() => setSelected("no")}
            >
              No
            </button>
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
export default ArrangementModal;
