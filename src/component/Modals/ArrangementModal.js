import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { setArrange } from "../../state/score";
import { useDispatch, useSelector } from "react-redux";

const ArrangementModal = ({ close, submitModal }) => {
  const [selected, setSelected] = useState("yes");
  const dispatch = useDispatch();

  const save = () => {
    submitModal({ type: "arrangement", data: selected ? 10 : 0 });
    dispatch(setArrange(selected ? 10 : 0));
  };
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", background: "#21004454", zIndex: 5 }}
    >
      <div className="modal-dialog">
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
